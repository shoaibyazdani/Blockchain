var num1= prompt("Enter first number");
var num2= prompt("Enter 2nd number");
var num1=Number(num1)
var num2 =Number(num2)

var sub= num1-num2;
var mult= num1*num2;
var div= num1/num2;
var mod= num1%num2;

document.write(
    "subtraction of " + num1 +"and "+ num2 + "is" + sub
    +"<br>"+"multiplication of " + num1 +"and "+ num2 + "is" + mult
    +"<br>"+"division of " + num1 +"and "+ num2 + "is" + div
    +"<br>"+"modulus of " + num1 +"and "+ num2 + "is" + mod );
