let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnClr = document.getElementById("btnClr");
let btnEql = document.getElementById("btnEql");
let btnSum = document.getElementById("btnSum");
let btnSub = document.getElementById("btnSub");
let btnMul = document.getElementById("btnMul");
let btnDiv = document.getElementById("btnDiv");

function displaytext() {
    let res = document.getElementById("res");
    res.innerText += btn0.innerText;
}

function displaytext1() {
  let res = document.getElementById("res");
  res.innerText += btn1.innerText;
}

function displaytext2() {
let res = document.getElementById("res");
res.innerText += btn2.innerText;
}

function displaytext3() {
let res = document.getElementById("res");
res.innerText += btn3.innerText;
}

function displaytext4() {
let res = document.getElementById("res");
res.innerText += btn4.innerText;
}

function displaytext5() {
let res = document.getElementById("res");
res.innerText += btn5.innerText;
}

function displaytext6() {
let res = document.getElementById("res");
res.innerText += btn6.innerText;
}

function displaytext7() {
let res = document.getElementById("res");
res.innerText += btn7.innerText;
}

function displaytext8() {
let res = document.getElementById("res");
res.innerText += btn8.innerText;
}

function displaytext9() {
let res = document.getElementById("res");
res.innerText += btn9.innerText;
}

function btnClr1() {
let res = document.getElementById("res");
res.innerText = "";
}

function btnEql1() {
let res = document.getElementById("res");
console.log(res.innerText);

if(res.innerText.includes("+")){
 let splitted = res.innerText.split("+");
 console.log(splitted);
 let sum = 0;
 for(let i=0; i<splitted.length; i++){
     sum += parseInt(splitted[i]);
 }
   console.log(sum);
 res.innerText = sum;
} else if(res.innerText.includes("-")){
let splitted = res.innerText.split("-");
console.log(splitted);
let sum = splitted[0];
for(let i=1; i<splitted.length; i++){
    sum -= parseInt(splitted[i]);
}
  console.log(sum);
res.innerText = sum;
} else if(res.innerText.includes("*")){
let splitted = res.innerText.split("*");
console.log(splitted);
let sum = splitted[0];
for(let i=1; i<splitted.length; i++){
  sum *= parseInt(splitted[i]);
}
console.log(sum);
res.innerText = sum;
} else if(res.innerText.includes("/")){
let splitted = res.innerText.split("/");
console.log(splitted);
let sum = splitted[0];
for(let i=1; i<splitted.length; i++){
  sum /= parseInt(splitted[i]);
}
console.log(sum);
res.innerText = sum;
}



}


function btnSum1() {
let res = document.getElementById("res");
res.innerText += btnSum.innerText;
}


function btnSub1() {
let res = document.getElementById("res");
res.innerText += btnSub.innerText;
}

function btnMul1() {
let res = document.getElementById("res");
res.innerText += btnMul.innerText;
}

function btnDiv1() {
let res = document.getElementById("res");
res.innerText += btnDiv.innerText;
}