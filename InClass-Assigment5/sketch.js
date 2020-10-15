let piclist1 = [];

let xposList = [];
let yposList = [];

let yspeedList = [];
let numofpic = 50;
let sizelist = [];

function preload(){

for(let i = 0; i < 25;i = i +1){
piclist1[i] = loadImage('https://i.imgur.com/3rN5EVw.png');}
for(let i =25; i<numofpic;i =i +1){
piclist1[i] = loadImage('https://i.imgur.com/q0LAL5N.png');
}





}

function setup() {
  createCanvas(windowWidth,windowHeight);
for(let i = 0;i<numofpic;i=i+1){
  yposList[i] = 0;
  xposList[i] = random(0,width);
  yspeedList[i] = random(2,20);
  sizelist[i] = random(200,50)
}



}

function draw() {
  background(0,180,250);
  imageMode(CENTER);

for (let i = 0; i < numofpic; i=i+1) {
  image(piclist1[i],xposList[i],yposList[i],sizelist[i],sizelist[i]);


yposList[i] = yposList[i] + yspeedList[i];

}



}
