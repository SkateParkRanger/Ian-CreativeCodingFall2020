//"Inner Triangle"-Intersecting triangles form more triangles,
//creating new patterns within patterns.
//Made using a traingle, with noise applied to strokeWidth and angle rotation,
//and push-translate-pop.

let angleR;
let offsetR;
let offsetsW;

function setup() {
  createCanvas(windowWidth,windowHeight);

  angleMode(DEGREES);
  offsetR = 0.0;
  offsetsW=0.0;
  noLoop();
}

function draw () {
  background(250,100,60);
  for (let i = 0; i <width; i = i +120){
    for(let j = 0; j < height; j = j +120){
      push ();
      translate(i,j);
      //experiment with angle to obtain interesting result
     angleR = noise(offsetR)* 120;
      rotate(angleR);
    fill(random(0,120,150),0,200,100);
    //apply noise to strokeWeight that changes with refreshing
    strokeWeight(noise(offsetsW)*10);
  triangle(90,225,174,60,258,225);
    offsetR = offsetR + 0.01;
    pop();
   }
  }
}
