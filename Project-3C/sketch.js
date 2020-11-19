//"Colorado Sunset"-An abstracted mountain range at twilight,
//seen from miles away.
//Made using noise applied to both verital and horizontal lines,
//with various colors and transparency.

let offset = 0.0;

function setup(){
createCanvas(windowWidth,windowHeight);
noLoop();
}

function draw(){
  background(200,0,50);

//Draw vertical line, experiment with color, and numbers that follow offsets
  stroke(100,50,150);
  for(let j = 0; j <height; j = j + 1) {
    let linew = width - noise(offset)*1000;
    line(width,j,linew,j);
    offset = offset + 0.01;
  }
  //Draw vertical line, experiment with color, and numbers that follow offsets
  stroke(25,25,250);
  for(let j = 0; j <height; j = j + 1) {
    let linew = width - noise(offset)*1000;
    line(width,j,linew,j);
    offset = offset + 0.01;
  }
  //Draw vertical line, experiment with color, and numbers that follow offsets
  stroke(25,100,250,50);
  for(let j = 0; j <height; j = j + 1) {
    let linew = width - noise(offset)*1000;
    line(width,j,linew,j);
    offset = offset + 0.1;
  }
  //Draw horizontal line, experiment with color, and numbers that follow offsets
  stroke(50);
  for(let i = 0; i <width; i = i +1){
    let lineh = height - noise(offset)*500;
    line(i,height,i,lineh);
    offset = offset + 0.001;
  }
//Draw horizontal line, experiment with color, and numbers that follow offsets
  stroke(0);
  for(let i = 0; i < width; i = i + 1){
    let lineh = height - noise (offset)*100;
    line(i,height,i,lineh);
    offset = offset + 0.01;
  }

}
