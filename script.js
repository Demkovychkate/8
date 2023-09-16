let mass= [7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];

// Task1
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

// Task2
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

// Task3
let btn3=document.querySelector('.btn3');
let res3=document.querySelector('.result3');

function ThirdTask(){
  for( i=1; i< 8; i++){
    for( j=1; j< 11; j++){
        res3.innerHTML +=`${i}*${j}=${i*j}<br>`;
    }
  res3.innerHTML += '<br>' ;  
}
}
btn3.onclick=ThirdTask;

// Task4
let btn4=document.querySelector('.btn4');
let res4=document.querySelector('.result4');
let str4= ' ';

function FourthTask(){  
  let sum=0;
  for( let i=1; i <= 15; i++){
    sum += i;
    str4 = sum;
  res4.innerHTML = str4;
  console.log(str4);
}
}
btn4.onclick=FourthTask;

  
