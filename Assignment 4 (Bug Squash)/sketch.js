let character = [];
let count = 20;
let bSquashed = 0;
var timerValue = 30;
var startButton;


function preload() {
  spriteSheet = loadImage("Roach_ani2.png");
}

function setup() {
  createCanvas(800, 800);
  imageMode(CENTER);
  setInterval(timeIt, 1000);

  for (i = 0; i<count;i++){
    character [i]= new Character(spriteSheet,
       random(150,750), random(150,750), random(1,5), random([-1,1]));
  }
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}

function mousePressed(){
  for (i = 0; i<count;i++){
    character[i].grab();
  }
}

function draw() {
  background(200, 200, 200);
  if (timerValue >= 10) {
    text("0:" + timerValue, 30, 50);
    textSize(20);
    text('Bugs Squished: ' + bSquashed, 30, 30);
  }
  if (timerValue < 10) {
    text("0:0" + timerValue, 30, 50);
    text('Bugs Squished: ' + bSquashed, 30, 30);
  }
  if (timerValue == 0) {
    textSize(50);
    text('Game Over', 250, 300);
    character[i].stop();
  }

  for (i = 0; i<count;i++){
    character[i].draw();
  }
}

class Character {
  constructor (spriteSheet, x, y, speed, move) {
    this.spriteSheet = spriteSheet;
    this.sx = 0;
    this.x = x; 
    this.y = y;
    this.move = 0;
    this.facing = 0;
    this.speed = speed;
    this.move = move;
    this.facing = move;
  } 

  
  draw() {
    push();
    translate(this.x, this.y);
    scale (this.facing, 1);
    rotate(PI / 2.0);

    //Squashed
    if (this.move == 0){
      image(this.spriteSheet,0,0,50,50,125,0,25,32);
    }
    //Alive - walking
    else {
      image(this.spriteSheet,0,0,50,50,25*(this.sx),0,25,32);
    }
    
    if (frameCount % 5 == 0){
      this.sx = (this.sx + 1) % 4;
    }

    this.x += this.speed * this.move;

    if (this.x < 30) {
      this.move = 1;
      this.facing = 1;
    }
    else if (this.x > width-30) {
      this.move = -1;
      this.facing = -1;
    }

    pop();
  }
  
  go(direction) {
    this.move = direction;
    this.facing = direction;
    this.sx = 2;
  }
  stop() {
    this.move = 0;
  }

  grab(){
    if(mouseX > this.x - 40 && mouseX < this.x + 40 &&
       mouseY > this.y - 40 && mouseY < this.y + 40){
         this.stop();
         this.grabbed = true;
         bSquashed++;
         velo++;
       }
  }

}
