
function sum(){
  let x = document.getElementById('num1').value;
  let y = document.getElementById('num2').value;
  let num1 = parseInt(x);
  let num2 = parseInt(y);
  document.getElementById('result1').innerHTML = num1 + num2;
}

function sub(){
  let x = document.getElementById('num1').value;
  let y = document.getElementById('num2').value;
  let num1 = parseInt(x);
  let num2 = parseInt(y);
  document.getElementById('result1').innerHTML = num1 - num2;
  // alert('I dont word');
}

function multi(){
  let x = document.getElementById('num1').value;
  let y = document.getElementById('num2').value;
  let num1 = parseInt(x);
  let num2 = parseInt(y);
  document.getElementById('result1').innerHTML = num1 *num2;
}

function divid(){
  let x = document.getElementById('num1').value;
  let y = document.getElementById('num2').value;
  let num1 = parseInt(x);
  let num2 = parseInt(y);
  document.getElementById('result1').innerHTML = num1 / num2;
}