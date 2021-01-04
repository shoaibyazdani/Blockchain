document.write("<h1>Calculator</h1>");
var num1 =prompt("Enter 1st number:");
var num2 =prompt("Enter 2nd number:");
var operator =prompt("select the operator from (+,-,*,/,%)");
if(operator==='+'){
    document.write("Your calculations is: "+parseInt(num1)+parseInt(num2));
}
if(operator==='-'){
    document.write("Your calculations is: "+parseInt(num1)-parseInt(num2));
}
if(operator==='*'){
    document.write("Your calculations is: "+parseInt(num1)*parseInt(num2));
}
if(operator==='/'){
    document.write("Your calculations is: "+parseInt(num1)/parseInt(num2));
}
if(operator==='%'){
    document.write("Your calculations is: "+parseInt(num1)%parseInt(num2));
} 