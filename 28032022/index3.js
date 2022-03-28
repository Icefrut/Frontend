let canvas;
let ctx;

window.onload = function(){
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext("2d")
  canvas.addEventListener("click", getxy)
  ctx.translate(canvas.width/2, canvas.height/2);
  // // drawLine();
  // drawRect();
  // fillRect();
  // drawrc();
  // drawCurve();
  drawHeart();
}

function getxy(e){
  let xCord = e.clientX;
  let yCord = e.clientY;
  console.log(xCord, yCord);
}
function drawLine(){
  ctx.moveTo(0,0);
  ctx.lineTo(-600,400);
  ctx.moveTo(0,0);
  ctx.lineTo(-600,-400);
  ctx.stroke();
}

function drawRect() {
  ctx.strokeRect(-100,-100,100,100);
}

function fillRect(){
  ctx.fillStyle = "red";
  ctx.fillRect(0,0,100,100);

}

function drawrc() {
  ctx.lineWidth = "10";
  ctx.fillStyle = "gray";
  ctx.arc(-50,-50,50,0,2*Math.PI);
  ctx.stroke();
  ctx.fill();
}

function drawCurve() {
  // ctx.moveTo(0,200);
  // ctx.bezierCurveTo(0,0,200,0,200,200);
  // ctx.bezierCurveTo(200,0,400,0,400,200);
  // ctx.bezierCurveTo(400,0,600,0,600,200);

  ctx.moveTo(0,0);
  ctx.bezierCurveTo(150,300,450,100,600,400);
  ctx.stroke();
}

function drawHeart() {
  ctx.shadowBlur=10;
  ctx.shadowColor = "black";
  ctx.fillStyle = "red";
  ctx.moveTo(0,-50);
  ctx.bezierCurveTo(0,-120,-100,-120,-100,-50);
  ctx.bezierCurveTo(-100,30,0,30,0,100);
  ctx.bezierCurveTo(0,30,100,30,100,-50);
  ctx.bezierCurveTo(100,-120,0,-120,0,-50);
  // ctx.stroke();
  ctx.fill();
}
