let canvas;
let ctx;

window.onload = function(){
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext("2d");
  // canvas.addEventListener("click", getxy);
  ctx.translate(canvas.width/2, canvas.height/2);
  // // drawLine();
  // drawRect();
  // fillRect();
  // drawrc();
  // drawCurve();
  // drawHeart();
   // canvas.addEventListener("click", addHeart);
   // drawElips();
   drawSmile();
}

function addHeart(e) {
  let xCord = e.clientX - e.target.offsetLeft;
  let yCord = e.clientY - e.target.offsetTop;
  let size = 10+ Math.round(Math.random()*50);
  drawRandomHeart(xCord,yCord,size);

}

function getxy(e){
  let xCord = e.clientX - e.target.offsetLeft;
  let yCord = e.clientY - e.target.offsetTop;
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

function drawRandomHeart(hrtX,hrtY,hrtSize) {
  ctx.beginPath()
  ctx.shadowColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  ctx.shadowBlur=10;
  ctx.fillStyle = '#' + Math.floor(Math.random()*16777215).toString(16);
  ctx.moveTo(hrtX, hrtY - hrtSize / 2);
  ctx.bezierCurveTo(hrtX, hrtY - 1.2 * hrtSize, hrtX - hrtSize, hrtY - 1.2 * hrtSize, hrtX - hrtSize, hrtY - hrtSize/2);
  ctx.bezierCurveTo( hrtX - hrtSize, hrtY + 0.2 * hrtSize, hrtX, hrtY + 0.2 * hrtSize, hrtX, hrtY + hrtSize);
  ctx.bezierCurveTo( hrtX, hrtY + 0.2 * hrtSize, hrtX + hrtSize, hrtY + 0.2 * hrtSize, hrtX + hrtSize, hrtY - hrtSize/2);
  ctx.bezierCurveTo( hrtX + hrtSize, hrtY - 1.2 * hrtSize, hrtX, hrtY - 1.2 * hrtSize, hrtX, hrtY - hrtSize/2);
  ctx.fill();
  console.log(ctx.fillStyle);
  ctx.closePath()
}

function drawElips() {
  ctx.fillStyle = "red";
  ctx.ellipse(0,0,100,100,Math.PI/2, 0,Math.PI*2)
  ctx.fill();
}

function drawSmile() {
  ctx.beginPath()
  ctx.arc(0,0,100,0,2*Math.PI);
  ctx.moveTo(-30,-30);
  ctx.arc(-50,-30,20,0,2*Math.PI);
  ctx.moveTo(70,-30);
  ctx.arc(50,-30,20,0,2*Math.PI);
  ctx.moveTo(-60,20);
  ctx.arc(0,20,60,0,1*Math.PI);
  ctx.stroke();
  ctx.closePath()

}
