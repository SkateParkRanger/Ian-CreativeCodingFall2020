//"Light Speedometer"-A series of rotated color wheels energetically vibrate
//against a vibrant blue background.
//Made using a loaded image, noise applied to angle rotation, and
//push-translate-pop.
let angleR;
let offsetR;
let img;

function preload(){
  img = loadImage('https://i.imgur.com/Eduof9T.png');
}
//allow to loop and animate
function setup() {
  createCanvas(windowWidth,windowHeight);


  angleMode(DEGREES);
  offsetR = 0.0;
  //experiment with frameRate to find interesting result
 frameRate(15);
}
function draw () {
  background(0,0,150);
  for (let i = 0; i <width; i = i +120){
    for(let j = 0; j < height; j = j +120){
      push ();
      translate(i,j);
      //experiment with angles until find interesting result
      angleR = noise(offsetR)* 90;
      rotate(angleR);
     fill(0,0,200,100);
//use image instead of shape, reduce image size because it was too big
    image(img,50,0, width/15,height/15);
      offsetR = offsetR + 0.006;
      pop();

    }
  }
}
