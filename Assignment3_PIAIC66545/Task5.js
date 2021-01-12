var arr1 = [3,'a','a','a',2,3,'a',3,'a',2,4,9,3];
arr1 = arr1.filter((value,index,arr)=> arr.indexOf(value) == index);
document.write("<b>"+arr1);