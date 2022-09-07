
function setup(){
  //Make the canvas fill the whole window
  createCanvas(windowWidth, windowHeight);
  frameRate(32);
}

function draw(){
  background(135);
  line(width / 2, height / 2, mouseX, mouseY);
  //console.log(mouseX, mouseY);
}