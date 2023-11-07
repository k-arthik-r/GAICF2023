function sendDriveLinkToUser(e) {
  var userEmail = e.values[1]; // Assuming the email is in the second column
  var formResponsesSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Form Responses 1');
  var dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data Sheet');
  
  if (dataSheet) {
    var lastRow = dataSheet.getLastRow();
    for (var i = 2; i <= lastRow; i++) { // Assuming data starts from row 2
      if (dataSheet.getRange('B' + i).getValue() === userEmail) { // Assuming email is in column B
        var driveLink = dataSheet.getRange('C' + i).getValue(); // Assuming drive link is in column C
        MailApp.sendEmail(userEmail, 'Here is your unique drive link', 'Link: ' + driveLink);
        break;
      }
    }
  } else {
    Logger.log("Data Sheet not found. Please check the sheet name.");
  }
}
