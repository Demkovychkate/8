let mass= [7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let btn1=document.querySelector('.btn1');
let res1=document.querySelector('.result1');
let str1= ' ';

function FirstTask(){
    for(let i=10; i <= 20; i++){
       str1 += [i]; 
       str1 += ' , '
       res1.innerHTML=str1;
       console.log(i);         
    }     
}   
btn1.onclick=FirstTask;


let btn2=document.querySelector('.btn2');
let res2=document.querySelector('.result2');
let str2= ' ';

function SecondTask(){
  for(let i=10; i <= 20; i++){
    str2 += Math.pow( [i],2); 
    str2 += ' , '
    res2.innerHTML=str2;
    console.log(i);         
 }     
}   
btn2.onclick=SecondTask;