function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    try {
      var emailAddress = data[i][0]; //Email present in 2nd column
      var name = data[i][1]; //Name present present in 3rd column
      var driveLink = data[i][3] //driveLink present present in 3rd column
      var htmlContent = `
    <html>
    <body>
        <p>Dear, ${name}<br><br>You can access your E-certificate <a href="${driveLink}" target="_blank">here</a>.</p>
        <p><br>OR<br><br> use this link:<br> ${driveLink}</p>
    </body>
    </html>
`;

      
      var subject = "Red Cross Day Webinar E-Certificate";
      var message = `<br>${htmlContent}`;

        GmailApp.sendEmail(emailAddress, subject, message, {
          htmlBody: message
        });

      Logger.log('Email sent to ' + emailAddress);
    } catch (e) {
      Logger.log('Error sending email to ' + emailAddress + ': ' + e.toString());
    }
  }
}



