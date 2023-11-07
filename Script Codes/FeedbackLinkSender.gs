function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    try {
      var emailAddress = data[i][2];
      var name = data[i][1];
      var message = "Hello " + name + ",\n\nThank you for attending this Event. Here is the feedback form link:\n\nhttps://bit.ly/feedback-certification-form\n\nPlease fill this form to receive your participation E-certificate.\n\nNOTE: While filling the form, please use the mail id given while registering, i.e., the current mail id to which this message is sent. Otherwise, you won't receive the certificate.\n\nRegards,\nGAICF Organizing Team, VVCE";

      MailApp.sendEmail({
        to: emailAddress,
        subject: 'Feedback Form for Event',
        body: message
      });

      Logger.log('Email sent to ' + emailAddress);
    } catch (e) {
      Logger.log('Error sending email to ' + emailAddress + ': ' + e.toString());
    }
  }
}

