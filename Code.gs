function dataEntry() {
  
  var formUrl="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdT7jFbSpIkZQiac58LQtpT3vrXjv8-ebubcP296FXeWrtwFg/formResponse";
  
  var wrkBk =SpreadsheetApp.getActiveSpreadsheet();
  var wrkSht = wrkBk.getSheetByName("sheet1");
  
  var noOfRows = 4;
  
  for(i=2;i<=noOfRows;i++){
  
  var fname = wrkSht.getRange("A"+ i).getValue();
  var lname = wrkSht.getRange("B"+ i).getValue();
  var age = wrkSht.getRange("C"+ i).getValue();
  var gen = wrkSht.getRange("D"+ i).getValue();
  var phone = wrkSht.getRange("E"+ i).getValue();
  var email = wrkSht.getRange("F"+ i).getValue();
  
  
 var datamap = { "entry.1072167967":fname,
    "entry.47887436":lname,
    "entry.587131107":age,
    "entry.1541372013":phone,
    "entry.2133707537":email,
    "entry.66987487":gen,
     };
  
  
  var options={
    "method" : "post",
    "payload" :datamap
  };
    
  
  UrlFetchApp.fetch(formUrl, options)
  }
}
