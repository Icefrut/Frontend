window.onload = function (){
   random();
   timer();
}

function random() {
  var random;
  var x = 0;
  while(true){
    random = Math.floor(Math.random()*1000000);
    x++;
    if(random>=100000){
      document.getElementById('random').innerHTML = random;
      console.log(x);
      break;
    }
  }

}
var intervalId= window.setInterval(function(){
  random();
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
