var color = ["black","white","pink","green","red","purple","blue"];
var color1 = parseInt(prompt("at which index you want to add a new color?"));
var color2 = prompt("which color you want to add?");
color.splice(color1,0,color2);
for (var i=0; i <=color.length-1; i++){
    document.write("<br>" + color[i]);
}