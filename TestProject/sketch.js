let xpos = 500;
let ypos = 0;
let xballspeed = 5;
let yballspeed = 10;

function setup() {
  createCanvas(windowWidth,windowHeight);  }

function draw() {
background(100,0,200);
  fill(200,200,0);
  circle(xpos,ypos,50);

  xpos = xpos + xballspeed;
  ypos = ypos + yballspeed;

//check for x position
  if(xpos > width){
    xballspeed = -xballspeed;
  }
  if (xpos < 0){
      xballspeed = -xballspeed;
  }
  //check for Y postion
  if(ypos > height){
    yballspeed = -yballspeed;
  }
  if (ypos < 0){
    yballspeed = -yballspeed;
  }
}
