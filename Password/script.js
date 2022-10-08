const upperLetters = "ABCDEFHIJKLMNOPQRSTUVWXYZ";
const lowerLetters= "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "~!@#$%^&*()_+=|";

const passElement = document.getElementById("pw");
const copyElement = document.getElementById("copy");
const length = document.getElementById("length");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const symbol = document.getElementById("symbol");
const num = document.getElementById("number");
const generate = document.getElementById("generate");

function getLower(){
  return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
}

function getUpper(){
  return upperLetters[Math.floor(Math.random()*upperLetters.length)];
}

function getNum(){
  return numbers[Math.floor(Math.random()*numbers.length)];
}

function getSymbol(){
  return symbols[Math.floor(Math.random()*symbols.length)];
}

function generatePass(){
  const len = length.value;
  password ="";
  for(let i= 0;i<len;i++){
    const x = generateX();
    password+=x;
  }
  passElement.innerText = password;
}


function generateX(){
  const xs =[];

  if(upper.checked){
    xs.push(getUpper());
  }

  if(lower.checked){
    xs.push(getLower());
  }

  if(num.checked){
    xs.push(getNum());
  }

  if(symbol.checked){
    xs.push(getSymbol());
  }

  if(xs.length === 0)
  return "";
  else
  return xs[Math.floor(Math.random()*xs.length)];
}

generate.addEventListener("click" , generatePass);

copyElement.addEventListener("click" , () =>{
  const text = document.createElement("textarea");
  text.value = passElement.innerText;
   text.select();
   navigator.clipboard.writeText(text.value);
   alert("PASSWORD copied to clipboard");
})
