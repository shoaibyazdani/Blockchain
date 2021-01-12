var names = ["Micheal","John","Tony"];
var scores = ["320","230", "480"];
for(var i = 0; i<= scores.length-1; i++ ){
  document.write("<b>" +"Scores of "+ names[i]+" is "+ scores[i]+"." + "Percentage:"+(scores[i]*100)/500+"%"+"<br>");
}