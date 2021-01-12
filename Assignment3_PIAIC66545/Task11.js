var arr = ["cake","apple pie","cookies","chips","patties"]
var UserInput = prompt("Welcome to ABC Bakery!. What do you want to order?");
var chk = false;  
for(let i = 0; i< arr.length; i++){
    if (arr[i]==UserInput){
    alert(UserInput + " is available at index "  + i);
    var chk = true;
    break;
    }
}
if(chk == false){
  alert("We are sorry! " + UserInput + " is not available in our bakery ");
}