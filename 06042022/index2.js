var random;
window.onload = function (){
   randomf();
   timer();
   var input = document.getElementById("capnum");
    input.addEventListener("keypress", function(e){
      if (e.keyCode == 13){
        capchaCheck();
      }
    });
}

function randomf() {
  var x = 0;
  while(true){
    random = Math.floor(Math.random()*1000000);
    x++;
    if(random>=100000){
      document.getElementById('random').innerHTML = random;
      // let obj = {
      //   capchanum: random.value
      // }
      // localStorage.setItem("capcha", JSON.stringify(obj));
      // console.log(random);
      break;
    }
  }

}
var intervalId= window.setInterval(function(){
  randomf();
  timer();
},10500)

function timer(){
  var timeleft = 1000;
  var downloadTimer = setInterval(function(){
    if (timeleft<=0){
      clearInterval(downloadTimer);
    }
    document.getElementById('timer').value = 1000 - timeleft;
    timeleft --;
  },10)
}

function capchaCheck() {
  var input = document.getElementById("capnum");
  if (input.value == random){
    alert("Succesful")
  } else {
    alert("Try Again")
  }
}
