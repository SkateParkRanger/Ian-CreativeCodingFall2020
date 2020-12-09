let cirX = 0;

function setup() {
createCanvas(windowWidth, windowHeight);
frameRate(30);
//use complementary color background
background('orange');
}

function draw() {
if(0<frameCount && frameCount<60*10){
background('blue');
  cirX = cirX += 1;
// Move shape horizontally
  if (cirX >= width) {
   // If you go off screen right side
    cirX = 0;
  }
  fill('orange');
  noStroke();
  //centered circle. Use radius 1/3 of canvas height
  circle(cirX, height/2, height/3
);
}
//use draw function for solid circle in center
if(600<frameCount && frameCount<600+120){
   drawCc();
}
//use draw function for solid circle in center with "n"
//number of circle outlines
if(600+120<frameCount && frameCount<600+240){
   n=6;
   drawManyc();
}
if(600+240<frameCount && frameCount<600+360){
   n=4;
   drawManyc();
}
//use draw function for square that's 1/3 of canvas height,
//with rounded corners
if(600+360<frameCount && frameCount<600+480){
drawRndsqr();
}
//Continue to use draw function with different "n" values to
//transition images
if(600+480<frameCount && frameCount<600+600){
   drawCc();
}
if(600+600<frameCount && frameCount<600+720){
   n=8;
   drawManyc();
}
//Use random number of outlines to create strobe effect
//while this "if" runs
if(600+720<frameCount && frameCount<600+840){
   n=random(1, 8);
   drawManyc();
}
if(600+840<frameCount && frameCount<600+960){
   drawCc();
}
if(600+960<frameCount && frameCount<600+1080){
   drawRndsqr();
}
//Draw opposite shape (square) with side of canvas height/3
//Had to figure out upper left corner coordinates for square
if(600+1080<frameCount && frameCount<600+1200){
    background('blue');
    fill('orange');
    square(width/2-height/6, height/2-height/6, height/3);
}
//Draw parallel horizontal lines
if(600+1200<frameCount && frameCount<600+1320){
background('blue');
stroke('orange');
strokeWeight(10);
for(var j=0; j<height; j+=20){
line(0, j, width, j);
}
}
//Add rounded corner square to previous image
if(600+1320<frameCount && frameCount<600+1440){
for(var j=0; j<height; j+=20){
line(0, j, width, j);
fill('orange');
square(width/2-height/6, height/2-height/6, height/3, 30);
}}
//draw circle with straight horizontal line thru it
if(600+1440<frameCount && frameCount<600+1560){
drawCc();
for(var j=0; j<height; j+=20){
line(0, j, width, j);
}}
//use draw functions to change images
if(600+1560<frameCount && frameCount<600+1680){
drawCc();
}
if(600+1680<frameCount && frameCount<600+1800){
 n=random(1, 8);
 drawManyc();
}
if(600+1800<frameCount && frameCount<600+1920){
  drawCc();
  line(0, height/2, width, height/2);
}
if(600+1920<frameCount && frameCount<600+2040){
  drawCc();
//reset to re-run
if(frameCount=2045){
frameCount=0;
}}}
//draws solid circle, centered, with diameter 1/3 canvas height
function drawCc(){
background('blue');
  fill('orange');
  circle(width/2, height/2, height/3);
}
//play around with equation until get desired result
function drawManyc(){
for (var i=0; i<n; i++){
  fill('blue');
  stroke('orange');
  strokeWeight(n+2);
  circle(width/2, height/2, 300/i+height/6);
  fill('orange');
  circle(width/2, height/2, height/6);
}}
//draws centered solid square with rounded corners
function drawRndsqr(){
  background('blue');
  fill('blue');
  stroke('orange');
  strokeWeight(10);
  square(width/2-height/6, height/2-height/6, height/3, 30);
}
