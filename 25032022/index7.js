function myFunction(){
  localStorage.setItem("name", "Luke");
  document.getElementById('demo').innerHTML = localStorage.getItem("name");
}
