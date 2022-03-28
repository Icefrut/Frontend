var i = 0
function loadinput(){
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var myinput = document.getElementById('getinput').value;
  var listitem = document.createElement("li");
  var button = document.createElement("button");
  var buttonName = "Clear";
  document.getElementById('demo').appendChild(listitem);
  document.getElementById('demo').appendChild(button);
  button.setAttribute("onclick", "delinput"+i+"()");
  button.setAttribute("id","delin" +i);
  button.innerHTML=buttonName;
  listitem.setAttribute("id","listitem" +i)


  if(sec<10 && min<10){
  listitem.innerHTML=myinput + " "+hour+":0"+min+":0"+sec;
}else if(min<10) {
  listitem.innerHTML=myinput + " "+hour+":0"+min+":"+sec;
}else if(sec<10) {
  listitem.innerHTML=myinput + " "+hour+":"+min+":0"+sec;
}else {
  listitem.innerHTML=myinput + " "+hour+":"+min+":"+sec;

}
i++;
}

function delinput0(){
  var x = document.getElementById('listitem0');
  var y = document.getElementById('delin0')
  x.parentNode.removeChild(x);
  y.parentNode.removeChild(y);

}

function delinput1(){
  var x = document.getElementById('listitem1');
  var y = document.getElementById('delin1')
  x.parentNode.removeChild(x);
  y.parentNode.removeChild(y);

}function delinput2(){
  var x = document.getElementById('listitem2');
  var y = document.getElementById('delin2')
  x.parentNode.removeChild(x);
  y.parentNode.removeChild(y);

}
