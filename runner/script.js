//код подсмотрел немного
var gameCanvas = document.getElementById("gameCanvas");
var canvasContext = gameCanvas.getContext("2d");

var trex = new Image();
var cactus = new Image();

trex.src = "src/trex.png";
cactus.src = "src/cactus.png";

var gap = 400;

document.addEventListener("keydown", moveUp);

function moveUp() {
    yPos -= 100;
}

cactusS = [];

cactusS[0] = {
  x: gameCanvas.width,
  y: 130,
};

var score = 0;

var xPos = 10;
var yPos = 130;
var grav = 10;

function draw() {
  for (var i = 0; i < cactusS.length; i++) {
    canvasContext.drawImage(cactus, cactusS[i].x, cactusS[i].y);

    cactusS[i].x--;

    if (cactusS[i].x == 125) {
      cactusS.push({
        x: gameCanvas.width,
        y: 130,
      });
    }

    if (
      (xPos + trex.width >= cactusS[i].x &&
        xPos <= cactusS[i].x + cactus.width &&
        (yPos <= cactusS[i].y + cactus.height ||
          yPos + trex.height >= cactusS[i].y + cactus.height + gap))
    ) {
      location.reload();
    }

    if (cactusS[i].x == 5) {
      score++;
    }
  }

  canvasContext.drawImage(trex, xPos, yPos);
 if(yPos>130){
   yPos += grav;
 }
 else{
  yPos=130;
 }


  canvasContext.fillStyle = `#000`;
  canvasContext.font = `24px Verdana`;
  canvasContext.fillText("Счет: " + score, 10, gameCanvas.height - 20);

  requestAnimationFrame(draw);
}

trex.onload = draw;
