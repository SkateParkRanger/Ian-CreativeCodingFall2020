let img;

function preload (){
img = loadImage('data:image/jpeg;base64,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');

}

function setup(){
createCanvas(windowWidth,windowHeight);
background(0,200,200);
}


function draw() {
img.loadPixels();

for(let x=0; x<img.width;x=x+4){
  for(let y=0;y<img.height;y=y+4){
    let i=(x+y*img.width)*4;

    let pixr=img.pixels[i+0];
    let pixg=img.pixels[i+1];
    let pixb=img.pixels[i+2];
    let pixa=img.pixels[i+3];

fill(pixr,pixg,pixb,pixa);
circle(x,y,4);


}
}
img.updatePixels();
image(img,200,200);
}
