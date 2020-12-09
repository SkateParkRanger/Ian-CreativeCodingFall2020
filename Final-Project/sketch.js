let rectX = 0;

function setup() {
createCanvas(windowWidth, windowHeight);
frameRate(30);
//use complementary color background
background('orange');
}

function draw() {
if(0<frameCount && frameCount<60*10){
background('orange');
  rectX = rectX - 1;
// Move shape horizontally
  if (rectX<=0) {
   // If you go off left side of screen.
    rectX = width;
  }

  fill('blue');
  noStroke();
  //centered, side that's 1/3 canvas height
  square(rectX, height/3, height/3);
}
//use draw function for solid square in center
if(600<frameCount && frameCount<600+120){
   drawCs();
}
//use draw function for solid square in center with "n"
//number of outlines
if(600+120<frameCount && frameCount<600+240){
//n max of 6
   n=6;
   drawManys();
}

if(600+240<frameCount && frameCount<600+360){
   background('orange');
   n=4;
   drawManys();
}
//use draw function for square that's 1/3 canvas height
if(600+360<frameCount && frameCount<600+480){
   drawRndsqr();
}
//continue to use draw functions with different "n"
//values to transition images
if(600+480<frameCount && frameCount<600+600){
   drawCs();
}

if(600+600<frameCount && frameCount<600+720){
   n=5;
   drawManys();
}
//use random number of outlines to create strobe effect
//while this "if" runs
if(600+720<frameCount && frameCount<600+840){
   n=random(1, 6);
   drawManys();
}

if(600+840<frameCount && frameCount<600+960){
   drawCs();
}

if(600+960<frameCount && frameCount<600+1080){
   drawRndsqr();
}
//draw opposite shape (circle) with diameter same as square side
if(600+1080<frameCount && frameCount<600+1200){
    background('orange');
    fill('blue');
    circle(width/2, height/2, height/3);
}
//draw parallel horizontal lines
if(600+1200<frameCount && frameCount<600+1320){
background('orange');
stroke('blue');
strokeWeight(10);
for(var j=0; j<height; j+=20){
line(0, j, width, j);
}}
//add rounded corner square to previous image
if(600+1320<frameCount && frameCount<600+1440){
for(var j=0; j<height; j+=20){
line(0, j, width, j);
fill('blue');
square(width/2-height/6, height/2-height/6, height/3, 30);
}}

if(600+1440<frameCount && frameCount<600+1560){
drawCs();
for(var j=0; j<height; j+=20){
  line(0, j, width, j);
}}
//continue to use draw functions to change image transitions
if(600+1560<frameCount && frameCount<600+1680){
drawCs();
}

if(600+1680<frameCount && frameCount<600+1800){
 n=random(1, 6);
 drawManys();
}

if(600+1800<frameCount && frameCount<600+1920){
  drawCs();
  line(0, height/2, width, height/2);
}
if(600+1920<frameCount && frameCount<600+2040){
  drawCs();
  //reset to re-run
if(frameCount=2045){
frameCount=0;
}}}

//draws solid square with side 1/3 canvas height, same as
//circle diameter
function drawCs(){
background('orange');
  fill('blue');
  square(width/2-height/6, height/2-height/6, height/3);
}

//max 6
//play around with equation to get desired effect
function drawManys() {
background('orange');
fill('orange');
stroke('blue');
for (var i=n; i>=0; i--){
   strokeWeight(i+4);
   square((width/2-height/6)-25*i, (height/2-height/6)-25*i, (height/3)+50*i);
}
fill('blue');
 square(width/2-height/6, height/2-height/6, height/3);
  }

//draw centered solid square with rounded corners
  function drawRndsqr(){
  background('orange');
  fill('orange');
  stroke('blue');
  strokeWeight(10);
  square(width/2-height/6, height/2-height/6, height/3, 30);
}
