function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0,0,255);

  //cricle
    fill(0,255,0)
    stroke(255, 255, 255);
    strokeWeight(5);
    ellipse(250, 250, 200, 200);

  //Star
    fill(255,0,0)
    stroke(255, 255, 255);
    strokeWeight(5);
    push();
    translate(250, 250);
    rotate(.95);
    rectMode(CENTER)
    star(0, 0, 40, 100, 5);
    pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

