function setup() {
  createCanvas(500, 250);
}

function draw() {
  background(0,0,0);
  //Red Ghost
    fill(255,0,0)
    noStroke()
    ellipse(375, 125, 200, 200);

    fill(255,0,0)
    noStroke()
    rect(275, 125, 200, 100);

    //eyes
      fill(255,255,255)
      noStroke()
      ellipse(330, 115, 60, 60);

      fill(255,255,255)
      noStroke()
      ellipse(415, 115, 60, 60);

      fill(0,0,255)
      noStroke()
      ellipse(330, 115, 30, 30);

      fill(0,0,255)
      noStroke()
      ellipse(415, 115, 30, 30);

  //Pac-man
    fill(255,255,0)
    noStroke()
    ellipse(125, 125, 200, 200);

    //Mouth
    translate(width / 2, height / 2);
    rotate(45 / 3.0);
    fill(0,0,0)
    noStroke()
    rect(100, 85, 100, 100);
}

