let xposList =[100,500,1000,400,35];
let yposList =[400,300,600,500,50];
let yspeedList = [10,20,30,15,25];
let xspeedList = [10,20,30,15,25];

function setup() {
createCanvas(windowWidth,windowHeight);
}

function draw () {
background(50,0,125);

for(let i = 0; i < xposList. length ; i = i +1){
  circle(xposList[i],yposList[i],50);

  yposList[i] = yposList[i] + yspeedList[i];
  xposList[i] = xposList[i] + xspeedList[i];

  if(xposList[i]> width){
    xspeedList[i] = -xspeedList[i];
  }

  if(yposList[i]> height){
    yspeedList[i] = -yspeedList[i];
  }
  if(yposList[i] < 0){
    yspeedList[i]= - yspeedList[i];
  }
if (xposList[i] < 0){
  xspeedList[i]=  - xspeedList[i];
}

}
}
