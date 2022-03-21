function Person() {
  var person ={
    firstName: "Jason",
    lastName: "Clark",
    age: "36"
  }
  var x = document.getElementById('demo');
  x.innerHTML = person.firstName + " is " + person.lastName + " " + person.age + " y.o";
}

function Animal() {
  var animal ={
    class:"Rat",
    name:"Creepy",
    age: "6"

  }
  var x =document.getElementById('demo');
  x.innerHTML = animal.class + " " + animal.name + " " + animal.age + " month";

}
