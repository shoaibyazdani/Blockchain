var aCities = ["Karachi","Lahore","Islamabad","Faisalabad"];
var o = ["th","st","nd","rd"];
for (var i = 1; i <= aCities.length-1; i++){
    document.write("<br>" + i + o[i] + " Choice is " + aCities[i-1]);
}