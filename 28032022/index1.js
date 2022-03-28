let login;
let password;

window.onload = function(){
  document.querySelector('#reg').addEventListener("click", saveLocal);

  login = document.querySelector('#usern1');
  password = document.querySelector('#pass1');
}

function saveLocal(){
  let obj = {
    login: login.value,
    password: password.value
  }
  localStorage.setItem("registration", JSON.stringify(obj));
}
