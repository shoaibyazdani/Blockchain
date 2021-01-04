var timezone = prompt("please enter your time");
if(timezone>=00 && timezone<12){
    alert("Good morning!");
}
else if(timezone>=12 && timezone<17){
    alert("Good afternoon");
}
else if(timezone>=17 && timezone<21){
    alert("Good evening!");
}
else{
    alert("Good night");
}