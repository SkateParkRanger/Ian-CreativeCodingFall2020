
let xpos = 500;
let ypos = 0;
let xballspeed = 5;
let yballspeed = 10;
let circlecolor= 120;

let circlesize =10;


function setup() {
  createCanvas(windowWidth,windowHeight);
circlesize = random(10,100);

}

function draw() {
background(100,0,200);
  fill(0,0,500);
circle(xpos,ypos,circlesize);



if (mouseIsPressed & dist(mouseX, mouseY,width/2, height/2,)<250 ){
function draw(){
xpos=random(100);
ypos=random(200);
  circle(xpos,ypos,circlesize);
}
}
else{

}




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
