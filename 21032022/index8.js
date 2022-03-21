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
  button.setAttribute("onclick", "delinput()");
  button.setAttribute("id","delin");
  button.innerHTML=buttonName;


  if(sec<10 && min<10){
  listitem.innerHTML=myinput + " "+hour+":0"+min+":0"+sec;
}else if(min<10) {
  listitem.innerHTML=myinput + " "+hour+":0"+min+":"+sec;
}else if(sec<10) {
  listitem.innerHTML=myinput + " "+hour+":"+min+":0"+sec;
}else {
  listitem.innerHTML=myinput + " "+hour+":"+min+":"+sec;
}
}

function delinput(){
  var x = document.getElementById('demo').innerHTML = " ";
}
