/**
 * Deal Health Check — Google Apps Script
 *
 * Run this against any Deal Sheet to validate completeness before going live.
 * Checks all required fields, tab structures, and data quality.
 *
 * Usage:
 *   1. Open the Deal Sheet in Google Sheets
 *   2. Extensions → Apps Script → paste this file
 *   3. Run checkDealHealth()
 *   4. Check the Logs (View → Logs) for the full report
 *
 * Or add to the BPI Deal Sheet Populator and call remotely.
 *
 * Author: laptop-2 (CL2 — QC Lead)
 * Created: 2026-04-06
 */

// ============================================================
// CONFIGURATION — Expected structure per fetchSheetData.ts
// ============================================================

const REQUIRED_TABS = [
  'Settings',
  'Expenses',
  'Rental Appraisal and Sales Comps',
  'Due Diligence',
  'Distances',
  'Government',
  'Industries',
  'Equity Projection',
  'Questions'
];

const OPTIONAL_TABS = [
  'Cashflow Summary',
  'Photos',
  'Market Data'
];

// Settings tab: Field name → { required: bool, format: string, description: string }
const SETTINGS_FIELDS = {
  'Address':              { required: true,  format: 'string',  description: 'Full property address' },
  'Purchase Price':       { required: true,  format: 'number',  description: 'Purchase price in dollars' },
  'Weekly Rent':          { required: true,  format: 'number',  description: 'Weekly rent in dollars' },
  'Bedrooms':             { required: true,  format: 'number',  description: 'Number of bedrooms' },
  'Bathrooms':            { required: true,  format: 'number',  description: 'Number of bathrooms' },
  'Car Spaces':           { required: true,  format: 'number',  description: 'Number of car spaces' },
  'Floor Area':           { required: true,  format: 'number',  description: 'Floor area in sqm' },
  'Land Area':            { required: true,  format: 'number',  description: 'Land area in sqm' },
  'LVR':                  { required: true,  format: 'whole_%', description: 'Loan-to-value ratio as whole number (e.g. 90 not 0.9)' },
  'Interest Rate':        { required: true,  format: 'whole_%', description: 'Interest rate as whole number (e.g. 6 not 0.06)' },
  'REA Link':             { required: false, format: 'url',     description: 'realestate.com.au listing URL' },
  'DD Folder ID':         { required: true,  format: 'string',  description: 'Google Drive DD folder ID' },
  'CF Sheet ID':          { required: true,  format: 'string',  description: 'Cashflow spreadsheet ID' },
  'Hero Image URL':       { required: false, format: 'url',     description: 'Property hero image CDN URL' },
  'Property URL':         { required: false, format: 'url',     description: 'property.com.au listing URL' },
  'Vacancy Rate':         { required: false, format: 'number',  description: 'Vacancy rate percentage' },
  'Stamp Duty':           { required: true,  format: 'number',  description: 'Stamp duty estimate in dollars' },
  'Deposit Percent':      { required: true,  format: 'whole_%', description: 'Deposit as whole number (e.g. 10)' },
  'Industry Source':      { required: false, format: 'string',  description: 'Source for industry data' },
  'Industry Takeaway 1':  { required: false, format: 'string',  description: 'Key industry insight 1' },
  'Industry Takeaway 2':  { required: false, format: 'string',  description: 'Key industry insight 2' },
  'Industry Takeaway 3':  { required: false, format: 'string',  description: 'Key industry insight 3' },
};

// Minimum expected rows per data tab
const MIN_ROWS = {
  'Expenses':           3,   // At least interest, rates, insurance
  'Distances':          5,   // At least 5 proximity entries
  'Government':         3,   // At least 3 projects
  'Industries':         5,   // At least 5 industries
  'Equity Projection':  5,   // At least 5 years
  'Due Diligence':      1,   // At least 1 DD item
  'Questions':          3,   // At least 3 suggested questions
};


// ============================================================
// MAIN FUNCTION
// ============================================================

function checkDealHealth(sheetId) {
  const ss = sheetId
    ? SpreadsheetApp.openById(sheetId)
    : SpreadsheetApp.getActiveSpreadsheet();

  const report = {
    sheetName: ss.getName(),
    sheetId: ss.getId(),
    timestamp: new Date().toISOString(),
    tabs: { pass: 0, fail: 0, warnings: 0, details: [] },
    settings: { pass: 0, fail: 0, warnings: 0, details: [] },
    data: { pass: 0, fail: 0, warnings: 0, details: [] },
    quality: { pass: 0, fail: 0, warnings: 0, details: [] },
    overall: 'UNKNOWN'
  };

  // --- Check 1: Required tabs exist ---
  checkTabs(ss, report);

  // --- Check 2: Settings fields populated and valid ---
  checkSettings(ss, report);

  // --- Check 3: Data tabs have minimum rows ---
  checkDataTabs(ss, report);

  // --- Check 4: Data quality checks ---
  checkDataQuality(ss, report);

  // --- Overall verdict ---
  const totalFails = report.tabs.fail + report.settings.fail + report.data.fail + report.quality.fail;
  const totalWarnings = report.tabs.warnings + report.settings.warnings + report.data.warnings + report.quality.warnings;

  if (totalFails > 0) {
    report.overall = 'FAIL';
  } else if (totalWarnings > 0) {
    report.overall = 'PASS WITH WARNINGS';
  } else {
    report.overall = 'PASS';
  }

  // --- Print report ---
  printReport(report);

  return report;
}


// ============================================================
// CHECK FUNCTIONS
// ============================================================

function checkTabs(ss, report) {
  const sheetNames = ss.getSheets().map(s => s.getName());

  for (const tab of REQUIRED_TABS) {
    if (sheetNames.includes(tab)) {
      report.tabs.pass++;
      report.tabs.details.push({ name: tab, status: 'PASS', message: 'Tab exists' });
    } else {
      report.tabs.fail++;
      report.tabs.details.push({ name: tab, status: 'FAIL', message: 'MISSING — required tab not found' });
    }
  }

  for (const tab of OPTIONAL_TABS) {
    if (!sheetNames.includes(tab)) {
      report.tabs.warnings++;
      report.tabs.details.push({ name: tab, status: 'WARN', message: 'Optional tab not present' });
    }
  }
}


function checkSettings(ss, report) {
  const settingsSheet = ss.getSheetByName('Settings');
  if (!settingsSheet) {
    report.settings.fail++;
    report.settings.details.push({ field: 'Settings tab', status: 'FAIL', message: 'Settings tab missing — cannot validate' });
    return;
  }

  const data = settingsSheet.getDataRange().getValues();
  const settingsMap = {};

  // Build map of Field → Value (Settings tab is 2-column: Field | Value)
  for (const row of data) {
    if (row[0] && typeof row[0] === 'string') {
      settingsMap[row[0].trim()] = row[1];
    }
  }

  for (const [field, config] of Object.entries(SETTINGS_FIELDS)) {
    const value = settingsMap[field];
    const isEmpty = (value === undefined || value === null || value === '');

    if (isEmpty && config.required) {
      report.settings.fail++;
      report.settings.details.push({
        field, status: 'FAIL',
        message: `MISSING — required field (${config.description})`
      });
    } else if (isEmpty && !config.required) {
      report.settings.warnings++;
      report.settings.details.push({
        field, status: 'WARN',
        message: `Empty — optional field (${config.description})`
      });
    } else {
      // Validate format
      const formatResult = validateFormat(field, value, config.format);
      if (formatResult.valid) {
        report.settings.pass++;
        report.settings.details.push({ field, status: 'PASS', message: `Value: ${value}` });
      } else {
        report.settings.fail++;
        report.settings.details.push({
          field, status: 'FAIL',
          message: `BAD FORMAT — ${formatResult.reason}. Got: ${value}`
        });
      }
    }
  }
}


function checkDataTabs(ss, report) {
  for (const [tabName, minRows] of Object.entries(MIN_ROWS)) {
    const sheet = ss.getSheetByName(tabName);
    if (!sheet) {
      report.data.fail++;
      report.data.details.push({ tab: tabName, status: 'FAIL', message: 'Tab missing' });
      continue;
    }

    const lastRow = sheet.getLastRow();
    const dataRows = Math.max(0, lastRow - 1); // Subtract header row

    if (dataRows >= minRows) {
      report.data.pass++;
      report.data.details.push({
        tab: tabName, status: 'PASS',
        message: `${dataRows} rows (minimum: ${minRows})`
      });
    } else if (dataRows > 0) {
      report.data.warnings++;
      report.data.details.push({
        tab: tabName, status: 'WARN',
        message: `Only ${dataRows} rows (recommended minimum: ${minRows})`
      });
    } else {
      report.data.fail++;
      report.data.details.push({
        tab: tabName, status: 'FAIL',
        message: `EMPTY — 0 data rows (minimum: ${minRows})`
      });
    }
  }
}


function checkDataQuality(ss, report) {
  const settingsSheet = ss.getSheetByName('Settings');
  if (!settingsSheet) return;

  const data = settingsSheet.getDataRange().getValues();
  const settings = {};
  for (const row of data) {
    if (row[0] && typeof row[0] === 'string') {
      settings[row[0].trim()] = row[1];
    }
  }

  // Check: LVR is whole number (should be 90, not 0.9)
  if (settings['LVR'] !== undefined && settings['LVR'] !== '') {
    const lvr = Number(settings['LVR']);
    if (lvr > 0 && lvr < 1) {
      report.quality.fail++;
      report.quality.details.push({
        check: 'LVR format', status: 'FAIL',
        message: `LVR is ${lvr} — should be whole number (e.g. 90 not 0.9). fetchSheetData divides by 100.`
      });
    } else if (lvr >= 1 && lvr <= 100) {
      report.quality.pass++;
      report.quality.details.push({ check: 'LVR format', status: 'PASS', message: `LVR = ${lvr} (correct format)` });
    }
  }

  // Check: Interest Rate is whole number (should be 6, not 0.06)
  if (settings['Interest Rate'] !== undefined && settings['Interest Rate'] !== '') {
    const rate = Number(settings['Interest Rate']);
    if (rate > 0 && rate < 1) {
      report.quality.fail++;
      report.quality.details.push({
        check: 'Interest Rate format', status: 'FAIL',
        message: `Interest Rate is ${rate} — should be whole number (e.g. 6 not 0.06). fetchSheetData divides by 100.`
      });
    } else if (rate >= 1 && rate <= 20) {
      report.quality.pass++;
      report.quality.details.push({ check: 'Interest Rate format', status: 'PASS', message: `Interest Rate = ${rate} (correct format)` });
    }
  }

  // Check: Purchase Price is reasonable
  if (settings['Purchase Price'] !== undefined && settings['Purchase Price'] !== '') {
    const price = Number(settings['Purchase Price']);
    if (price < 50000) {
      report.quality.warnings++;
      report.quality.details.push({
        check: 'Purchase Price', status: 'WARN',
        message: `Purchase Price is $${price.toLocaleString()} — unusually low. Verify this is correct.`
      });
    } else if (price > 10000000) {
      report.quality.warnings++;
      report.quality.details.push({
        check: 'Purchase Price', status: 'WARN',
        message: `Purchase Price is $${price.toLocaleString()} — unusually high. Verify this is correct.`
      });
    } else {
      report.quality.pass++;
      report.quality.details.push({ check: 'Purchase Price', status: 'PASS', message: `$${price.toLocaleString()}` });
    }
  }

  // Check: Weekly Rent is reasonable
  if (settings['Weekly Rent'] !== undefined && settings['Weekly Rent'] !== '') {
    const rent = Number(settings['Weekly Rent']);
    if (rent < 100) {
      report.quality.warnings++;
      report.quality.details.push({
        check: 'Weekly Rent', status: 'WARN',
        message: `Weekly Rent is $${rent} — unusually low. Verify this is correct.`
      });
    } else {
      report.quality.pass++;
      report.quality.details.push({ check: 'Weekly Rent', status: 'PASS', message: `$${rent}/pw` });
    }
  }

  // Check: Address contains state and postcode
  if (settings['Address'] && typeof settings['Address'] === 'string') {
    const addr = settings['Address'];
    const hasState = /\b(QLD|NSW|VIC|SA|WA|TAS|NT|ACT)\b/.test(addr);
    const hasPostcode = /\b\d{4}\b/.test(addr);

    if (!hasState || !hasPostcode) {
      report.quality.warnings++;
      report.quality.details.push({
        check: 'Address format', status: 'WARN',
        message: `Address may be incomplete — ${!hasState ? 'missing state' : ''} ${!hasPostcode ? 'missing postcode' : ''}. Got: "${addr}"`
      });
    } else {
      report.quality.pass++;
      report.quality.details.push({ check: 'Address format', status: 'PASS', message: addr });
    }
  }

  // Check: Hero Image URL is valid CDN link
  if (settings['Hero Image URL'] && typeof settings['Hero Image URL'] === 'string') {
    const url = settings['Hero Image URL'];
    if (!url.startsWith('http')) {
      report.quality.fail++;
      report.quality.details.push({
        check: 'Hero Image URL', status: 'FAIL',
        message: `Not a valid URL: "${url}"`
      });
    } else {
      report.quality.pass++;
      report.quality.details.push({ check: 'Hero Image URL', status: 'PASS', message: 'Valid URL' });
    }
  }

  // Check: DD Folder ID looks like a Google Drive ID
  if (settings['DD Folder ID'] && typeof settings['DD Folder ID'] === 'string') {
    const folderId = settings['DD Folder ID'];
    if (folderId.length < 10) {
      report.quality.warnings++;
      report.quality.details.push({
        check: 'DD Folder ID', status: 'WARN',
        message: `Folder ID looks too short: "${folderId}"`
      });
    } else {
      report.quality.pass++;
      report.quality.details.push({ check: 'DD Folder ID', status: 'PASS', message: 'Valid format' });
    }
  }
}


// ============================================================
// HELPERS
// ============================================================

function validateFormat(field, value, format) {
  switch (format) {
    case 'number':
      if (typeof value === 'number' || !isNaN(Number(value))) {
        return { valid: true };
      }
      return { valid: false, reason: `Expected number, got "${typeof value}"` };

    case 'whole_%':
      const num = Number(value);
      if (isNaN(num)) return { valid: false, reason: 'Expected whole number percentage' };
      if (num > 0 && num < 1) return { valid: false, reason: `Got ${num} — should be whole number (e.g. 90 not 0.9)` };
      return { valid: true };

    case 'url':
      if (typeof value === 'string' && value.startsWith('http')) {
        return { valid: true };
      }
      return { valid: false, reason: 'Expected URL starting with http' };

    case 'string':
      if (value !== undefined && value !== null && String(value).trim() !== '') {
        return { valid: true };
      }
      return { valid: false, reason: 'Expected non-empty string' };

    default:
      return { valid: true };
  }
}


function printReport(report) {
  const lines = [];

  lines.push('═══════════════════════════════════════════════════');
  lines.push(`  DEAL HEALTH CHECK — ${report.overall}`);
  lines.push('═══════════════════════════════════════════════════');
  lines.push(`  Sheet: ${report.sheetName}`);
  lines.push(`  ID: ${report.sheetId}`);
  lines.push(`  Checked: ${report.timestamp}`);
  lines.push('');

  // Tabs
  lines.push('── TABS ──────────────────────────────────────────');
  for (const d of report.tabs.details) {
    const icon = d.status === 'PASS' ? '✓' : d.status === 'WARN' ? '⚠' : '✗';
    lines.push(`  ${icon} ${d.name}: ${d.message}`);
  }
  lines.push(`  Result: ${report.tabs.pass} pass, ${report.tabs.fail} fail, ${report.tabs.warnings} warnings`);
  lines.push('');

  // Settings
  lines.push('── SETTINGS FIELDS ───────────────────────────────');
  for (const d of report.settings.details) {
    const icon = d.status === 'PASS' ? '✓' : d.status === 'WARN' ? '⚠' : '✗';
    lines.push(`  ${icon} ${d.field}: ${d.message}`);
  }
  lines.push(`  Result: ${report.settings.pass} pass, ${report.settings.fail} fail, ${report.settings.warnings} warnings`);
  lines.push('');

  // Data tabs
  lines.push('── DATA COMPLETENESS ─────────────────────────────');
  for (const d of report.data.details) {
    const icon = d.status === 'PASS' ? '✓' : d.status === 'WARN' ? '⚠' : '✗';
    lines.push(`  ${icon} ${d.tab}: ${d.message}`);
  }
  lines.push(`  Result: ${report.data.pass} pass, ${report.data.fail} fail, ${report.data.warnings} warnings`);
  lines.push('');

  // Quality
  lines.push('── DATA QUALITY ──────────────────────────────────');
  for (const d of report.quality.details) {
    const icon = d.status === 'PASS' ? '✓' : d.status === 'WARN' ? '⚠' : '✗';
    lines.push(`  ${icon} ${d.check}: ${d.message}`);
  }
  lines.push(`  Result: ${report.quality.pass} pass, ${report.quality.fail} fail, ${report.quality.warnings} warnings`);
  lines.push('');

  // Summary
  const totalPass = report.tabs.pass + report.settings.pass + report.data.pass + report.quality.pass;
  const totalFail = report.tabs.fail + report.settings.fail + report.data.fail + report.quality.fail;
  const totalWarn = report.tabs.warnings + report.settings.warnings + report.data.warnings + report.quality.warnings;

  lines.push('── SUMMARY ───────────────────────────────────────');
  lines.push(`  Total: ${totalPass} pass, ${totalFail} fail, ${totalWarn} warnings`);
  lines.push(`  Verdict: ${report.overall}`);

  if (totalFail > 0) {
    lines.push('');
    lines.push('  ✗ DO NOT DEPLOY — fix all failures first');
  } else if (totalWarn > 0) {
    lines.push('');
    lines.push('  ⚠ Deployable but review warnings before client presentation');
  } else {
    lines.push('');
    lines.push('  ✓ Ready for deployment');
  }

  lines.push('═══════════════════════════════════════════════════');

  Logger.log(lines.join('\n'));
}
