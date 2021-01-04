var a=4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b=82;
if (b++ === 83){
    alert("given condition for variable b is true");
    // First it's assign the value to b which is 82 then increase it's value
}
var c=12;
if (c++ === 13){
    alert ("condition 1 is true");
    // Also same as explain in above condition
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
    //In this condition first it increase the value of c which makes the 14 and 14 is equal to 14 not less then
}
if (c === 14){
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
if (true){
    alert("true");
}
if (false){
    alert("false");
}
if("car" < "cat"){
    alert("car is smaller than cat");
}