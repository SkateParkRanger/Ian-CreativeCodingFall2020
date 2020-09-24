
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(50,0,250);

  for(let i = 0; i <height ; i = i +1){
    let xlen = random(0,width/2);
    strokeWeight(3);
let rcol = random(80,255);
let gcol = random(80,255);
let bcol = random(80,255);

    stroke(rcol,gcol,bcol);
    line(1500,i,i,xlen);
  }
}

function draw(){
}
