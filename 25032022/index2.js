let array = ["BMW","Porche","Volvo","Toyota"];
console.log(array.length);
let numbers = [30,45,56,78,45,57,878,7658,5646,8987];

let sum = 0;
for(let i=0;i<numbers.length;i++){
  sum = sum + numbers[i];

}

function myFunction(){
  var x = document.getElementById('demo');
  for (let i = 0; i<array.length;i++){
    var p = document.createElement("p");
    x.appendChild(p);
    p.innerHTML = array[i];
    p.setAttribute("id","mark"+i);
  }
  console.log("Hello World!")
}

// console.log("Sum is", sum);
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
