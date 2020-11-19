//"Particulates"-A series of random blue-green dots/points fill the screen and
//their size (StrokeWeight) changes when refreshed.
//Dots are aligned horizontally but not aligned vertically.
//Apply noise to strokeWeight. Apply random to blue-green fill and x-position.
let offset;
let xpos;

function setup() {
  createCanvas(windowWidth,windowHeight);
 offset=random(0,1);
 noLoop();
}

function draw () {
  background('orange');

  for(let j = 0; j < height; j = j +50){
//y-position is aligned horizontally
  for (let i = 0; i <width; i = i +25){

//x-position is not aligned vertically
xpos=i+random(25);
stroke(0,random(0,255),random(0,255));
//apply noise to StrokeWeight that changes with refreshing
strokeWeight(noise(offset)*10);
point(xpos, j);

   }
  }
}
