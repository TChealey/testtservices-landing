function doPost(e) {

  var sheet = SpreadsheetApp
    .openById('1fFyQQRZzpJvohN6it2FAdGb16-Czd3vT4tvFb07T3uM')
    .getSheetByName('Sheet1');

  var p = e.parameter || {};

  sheet.appendRow([
    new Date (),
    p.name || '',
    p.company || '',
    p.phone || '',
    p.email || '',
    p.test_type || p.need || '',
    p.zip || '',
    p.address ||'',
    p.when || '',
    p.priority ||'',
    p.notes || '',
    p.utm_source || '',
    p.utm_medium || '',
    p.utm_campaign || '',
    p.page || ''
  ]);

  return HtmlService
    .createHtmlOutput('<!doctype html><meta charset="utf-8"><title>Thanks</title><div style="font:16px system-ui;padding:24px;color:#0b0f1a">Thank you! Your request was received.</div>');
}
