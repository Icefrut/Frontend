var obj = {
  name: "Jason",
  lastname: "Heck",
  city: "Vilnos"

}

var myJSON = JSON.stringify(obj);

document.getElementById('demo').innerHTML = myJSON;
