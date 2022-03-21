var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

function datetime() {
  var x = document.getElementById('demo')
  x.innerHTML= "Clock is: " + hours +":" + minutes +":"+ seconds;
  x.style.color = "white";
  document.body.style.backgroundColor = "DarkGray";
}
