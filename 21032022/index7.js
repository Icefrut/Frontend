function getimput1() {
  var x = document.getElementById('inputis1').value;
  document.getElementById('demo1').innerHTML = x;
}

function delimput1() {
  document.getElementById('demo1').innerHTML = " ";
}

function getimput2() {
  var x = document.getElementById('inputis2').value;
  document.getElementById('demo2').innerHTML = x;
}

function delimput2() {
  document.getElementById('demo2').innerHTML = " ";
}
function mode1() {
  var element = document.body;
  element.className = "Light-mode";
}

function mode2() {
  var element = document.body;
  element.className = "Night-mode";
}

function mode3() {
  var element = document.body;
  element.classList.toggle("Night-mode");
}
