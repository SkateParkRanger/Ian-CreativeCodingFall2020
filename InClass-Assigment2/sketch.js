let xloc = 100;
let yloc = 50;
let xspeed = 10;
let yspeed = 5;

let dia = 100;

function setup() {
createCanvas(windowWidth,windowHeight);

}

function draw() {
background(50,0,150);

fill(200,0,200);
circle(xloc,yloc,dia);

xloc = xloc + xspeed;
yloc = yloc + yspeed;

if(xloc > width - 50){
  xspeed = -xspeed;
}
if(xloc < 50){
  xspeed = -xspeed;
}
if (yloc > height -50){
  yspeed = -yspeed;
}

if (yloc < 50){
  yspeed = -yspeed;
}

if (mouseIsPressed & dist(mouseX,mouseY,xloc,yloc) < 100 ){
xloc = random(0,width);
yloc = random(0,height);
}

}
