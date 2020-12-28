var a = 2, b = 1;
var result = --a - --b + ++b + b-- ;

--a;
//   in this step the value oF varable will decrease as one 
// let x=--a   now  x=1 and a=1
--a - --b ;
// at this as value of both a & b  will decrease by 1 answer would be 1
// --a = 1
// --b=0   and these would be 1-0 = 1                   
--a - --b + ++b;
// as in last step process for --a & --b will remain same but there would be 1 increment in new value of b which is 0 
// then the new value of b that would be 1 again
//       1  -  0   +   1    =2

--a - --b + ++b + b--;
// in the last step the new value of b is 1 here the value of b will 
// remain 1 as in 1st step value will change after that step
//      1  -  0   +   1   +   1   =3

document.write("value of a is : " +a+"<br>" +"value of b is : "+b +"<br>"+"Result will be :"+result);