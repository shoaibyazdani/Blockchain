document.write("<h1>Marks sheet</h1>");
document.write("<br>");
var totalmarks = prompt("Total marks:");
var obtainedmarks = prompt("Marks obtained");
var t = ("Total marks:");
var u = ("Marks obtained:");
document.write(t+totalmarks);
document.write("<br>");
document.write(u+obtainedmarks);
document.write("<br>");
var percent = (obtainedmarks*100/totalmarks);
document.write("percentage:"+percent+"%");
document.write("<br>");
var a = ("Grades:");
var b = ("Remarks:");
if(percent>=80 && percent<=100){
    document.write(a+"A-one"+"<br>"+b+"Exelent");
}
else if(percent>=70 && percent<80){
    document.write(a+"A"+"<br>"+b+"Good");
}
else if(percent>60 && percent<70){
    document.write(a+"B"+"<br>"+b+"You need to improve");
}
else{
    document.write(a+"Fail"+"<br>"+"Sorry");
}