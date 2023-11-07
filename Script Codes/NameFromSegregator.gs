function editNamesToCustomFormat() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getRange('A1:A').getValues(); // Get all values in the first column
  for (var i = 0; i < data.length; i++) {
    var originalNames = data[i][0];
    var namesArray = originalNames.split(' '); // Assuming names are separated by spaces
    var formattedNamesArray = namesArray.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
    var formattedNames = formattedNamesArray.join(' ');
    sheet.getRange('A' + (i + 1)).setValue(formattedNames);
  }
}
