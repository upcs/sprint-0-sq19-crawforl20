"use strict";

function addTwo() {
  var num1 = Number(document.getElementById('num1').value);
  var num2 = Number(document.getElementById('num2').value);

  document.getElementById('result').innerHTML = num1 + num2;
  return false;
}

document.getElementById('sum').addEventListener('click', addTwo);
