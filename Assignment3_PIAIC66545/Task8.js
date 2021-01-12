//a)
var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
document.write("a)"+" Counting : "+num);
//b)
var arr = [1,2,3,4,5,6,7,8,9,10];
let reversearr = arr.reverse();
document.write("<br>"+ "b)" + " Reverse Counting:"+reversearr + "<br>");
//c)
document.write("c)" +"Even:");
var arr = [];
for (i = 0; i<=20; i++ ){
    if(i % 2 == 0){
document.write( i + ",");
 }
}
//d)
document.write("<br>" + "d)"+"Odd:");
var arr = [];
for (i = 0; i<=20; i++){
    if(i % 2 != 0){
document.write(i + ",");
    }
}
//e)
document.write("<br>"+ "e)" + " Series:");
var arr = [];
 for(i = 0; i<=20; i++){
     if(i % 2 == 0){
 document.write(i+ "k" + ",");
 }
 }