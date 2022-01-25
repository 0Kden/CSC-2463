
function setup() {
  createCanvas(1000, 700);
   background(255,255,255);
}

function draw() {
 
  if(mouseIsPressed){
   line(mouseX,mouseY,pmouseX,pmouseY);
  }
 
}

