//concept statement: POV 2020
//Cell phones are not only connecting people, their cameras are capturing moments.
//Images of racial injustice, police abuse of power, and vigilantism are now recorded and shared among millions of people.
// And, it’s hard to deny what can be seen.
//cell phones are also connecting dying COVID-19 patients with their loved ones who cannot visit due to hospital’s safety restrictions.
//Hundreds of thousands of people have had to FaceTime their goodbyes over a cell phone during the pandemic, with nurses helping patients make their “last calls.”

//declare variables
let cellphone;
let covid;
let floyd;
let whiteboy;
let x =0;

//load 4 images
function preload() {
  cellphone = loadImage("https://i.imgur.com/64Np2ab.png");
  covid=loadImage("https://i.imgur.com/B9VYp20.png");
  floyd=loadImage("https://i.imgur.com/9nrLgN4.png");
  whiteboy=loadImage("https://i.imgur.com/R8gBa5S.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);


}
//draw 4 images, with cell phone rotating clockwise and other 3 images stationary
function draw() {
background(0,100,100);
angleMode(DEGREES);

push();
translate(100,100);
rotate(x);
image(cellphone,0,0);
pop();
x=x+5;
//tint images using green and blue
tint(0,random(155,255),random(200,255));
image(covid,0,0);
image(floyd,850,0);
image(whiteboy,450,0);
}
