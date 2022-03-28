var input;
var timer;

window.onload = function(){
  console.log("Hello");
  document.querySelector('#saveLocal').addEventListener("click", saveLocal);
  document.querySelector('#deleteLocal').addEventListener("click", deleteLocal);
  window.addEventListener('keypress', autosave);

  input = document.querySelector('#textInput');
  var localValue = localStorage.getItem("textLocal");
  if(localValue){
    input.value= JSON.parse(localValue).text;
  }
}

function autosave(){
  if(timer){
    clearTimeout(timer);
  }
  timer = window.setTimeout(saveLocal, 3000)
}

function saveLocal(){

  var obj = {
    text: input.value
  };

  localStorage.setItem("textLocal", JSON.stringify(obj))
}

function deleteLocal(){
  localStorage.removeItem("textLocal");
  input.value ="";
}
