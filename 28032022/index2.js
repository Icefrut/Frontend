let login;
let password;

window.onload = function(){
  document.querySelector('#log').addEventListener("click", getLocal);

  login = document.querySelector('#usern2');
  password = document.querySelector('#pass2');
}

function getLocal(){
  let localValue = localStorage.getItem("registration");
  let loginValue = JSON.parse(localValue).login;
  let passwordValue = JSON.parse(localValue).password;

  if (login.value == loginValue && password.value == passwordValue){
    alert("Login Succesful")
  } else {
    alert("Invalid Login or password")
  }
}
