//"Transparent History"-A dynamic, continous curve that gracefully flows.
//Made using Bezier curve and noise applied to 2 anchor and 2 control points.

var t;
function setup() {
createCanvas(windowWidth, windowHeight) ;
stroke(0,100,250,55);
noFill();
t = 0 ;
background(0,250,255);
}

function draw() {
//4 points used for drawing continuous Bezier curve
//experiment with various numbers until achieve interesting image
  let x1 = width * noise(t + 35);
  let x2 = width * noise(t + 55);
  let x3 = width * noise(t + 75);
  let x4 = width * noise (t + 95);
  let y1 = height * noise (t + 35);
  let y2 = height * noise (t + 55);
  let y3 = height * noise (t + 95);
  let y4 = height * noise (t + 105);

  bezier( x1, y1, x2, y2, x3, y3, x4, y4);
//increase t to increase speed image appears
  t= t+0.001*5;
}
