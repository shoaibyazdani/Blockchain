document.write("<h1>Qualifications:</h1>");
var qual = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
for (var i = 1 ; i <= qual.length-1 ; i++){
    document.write("<b>" + i +")" + qual[i] + "</b>" + "<br>");
}