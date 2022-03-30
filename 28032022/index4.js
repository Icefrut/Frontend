let canvas;
let ctx;

window.onload = function(){
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext("2d")
  canvas.addEventListener("click", getxy)
  drawSea();
  drawSand();
  drawSun();
  drawCloud();

}

function getxy(e){
  let xCord = e.clientX;
  let yCord = e.clientY;
  console.log(xCord, yCord);
}

function drawSea() {
  ctx.beginPath()
  ctx.fillStyle = "#027699";
  ctx.strokeRect(0,175,600,225);
  ctx.fillRect(0,175,600,225);
}

function drawSand() {
  ctx.beginPath()
  ctx.fillStyle = "#F2E0B6";
  ctx.moveTo(0,300);
  ctx.bezierCurveTo(25,275,75,325,100,300);
  ctx.bezierCurveTo(125,275,175,325,200,300);
  ctx.bezierCurveTo(225,275,275,325,300,300);
  ctx.bezierCurveTo(325,275,375,325,400,300);
  ctx.bezierCurveTo(425,275,475,325,500,300);
  ctx.bezierCurveTo(525,275,575,325,600,300);
  ctx.lineTo(600,400);
  ctx.lineTo(0,400);
  ctx.lineTo(0,300);
  ctx.stroke();
  ctx.fill();
}

function drawSun() {
  ctx.beginPath()
  ctx.fillStyle = "#F2D672";
  ctx.shadowBlur=20;
  ctx.shadowColor = "#F2D672";
  ctx.arc(520,70,50,0,2*Math.PI);
  ctx.fill();
}

function drawCloud() {
  ctx.beginPath()
  ctx.shadowBlur=0;
  ctx.fillStyle = "white";
  ctx.moveTo(30,100);
  ctx.bezierCurveTo(30,80,60,60,80,80);
  ctx.bezierCurveTo(80,35,160,35,160,80);
  ctx.bezierCurveTo(180,60,210,80,210,100);
  ctx.bezierCurveTo(220,150,20,150,30,100);
  ctx.fill();
}
