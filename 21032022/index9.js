function makehyper() {
  var myinput = document.getElementById('inputname').value;
  var urlinput = document.getElementById('inputurl').value;
  var link = document.createElement("a");
  var slash = document.createElement("br");
  document.getElementById('demo').appendChild(link);
  document.getElementById('demo').appendChild(slash);
  link.setAttribute("href", urlinput);
  link.setAttribute("target", "_blank");
  link.innerHTML=myinput;
}
