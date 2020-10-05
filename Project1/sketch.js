//setup & random background color for G&B
function setup() {
  createCanvas(windowWidth, windowHeight);
background(102,random(0,255),random(0,255));
}

// variablElipse() calculates the speed of the mouse and draws a small circle if the mouse is moving slowly,
// and draws a large elipse if the mouse is moving quickly

function draw() {

  // Call the variableEllipse() and send it current mouse position & previous mouse postion

  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}



function variableEllipse(x, y, px, py) {


  let speed = abs(x - px) + abs(y - py);
  stroke(speed);

//change strokeweight (circle border thickness) when moving the mouse vertically,
//use mouseY, changes between bottom 3rd, middle 3rd & top 3rd of screen/window

  if(mouseY< windowHeight/3){
    strokeWeight(1);

}else if (mouseY< windowHeight*2/3){
    strokeWeight(2);

}else{
    strokeWeight(4);
  }

//change fill color of circle when moving mouse horisontally,
//use mouseX value, circle fill changes color when moving mouse left to right.

  fill(mouseX,mouseY,0,90);

//change circle broder color to match fill, which changeswhen moving mouse hoizontally,
//uses different transparency than fill.

  stroke(mouseX,mouseY,0,140);
//}else{
//  fill(255);
//}
  ellipse(x, y, speed, speed);

}
