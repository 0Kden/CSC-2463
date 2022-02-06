let color = ["red", "orange", "yellow", "lime", "cyan", "blue", "magenta", "saddleBrown", "white", "black"];

function setup() {
  createCanvas(1000, 700);
   background(255,255,255);
   bColor = "black";
}

function draw() {
 
  if(mouseIsPressed){
    if (mouseX <= 30) {
      if (mouseY <= 27) {
        bColor = color[0];
      } else if (mouseY < 57) {
        bColor = color[1];
      } else if (mouseY < 84) {
        bColor = color[2];
      } else if (mouseY < 111) {
        bColor = color[3];
      } else if (mouseY < 138) {
        bColor = color[4];
      } else if (mouseY < 165) {
        bColor = color[5];
      } else if (mouseY < 192) {
        bColor = color[6];
      } else if (mouseY < 219) {
        bColor = color[7];
      } else if (mouseY < 246) {
        bColor = color[8];
      } else if (mouseY < 273) {
        bColor = color[9];
      }
    }
    stroke(bColor);
    strokeWeight(3);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  squares();
}

function squares() {
  noStroke();

  for (let i = 0; i < color.length; i++) {
    fill(color[i]);
    i == 0 ? rect(5, 3, 30) : rect(5, 3 + 27 * i, 30);
  }
}