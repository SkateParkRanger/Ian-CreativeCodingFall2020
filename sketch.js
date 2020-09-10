let xpos = 0;
let ypos = 0;

let xpos2 = 100;
let ypos2=50;

function setup() {
  createCanvas(500,500);

  angleMode(DEGREES);
}

function draw() {
  background (200,0,200);
  rect (xpos,ypos,50);
  xpos = xpos +1;
  ypos = ypos +5;

  circle (xpos2,ypos2,50);
}
