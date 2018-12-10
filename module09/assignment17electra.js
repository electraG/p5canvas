// initialize the angle
let theta = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  
}
function draw() {
  push();
  // move the origin to the center of the canvas
  translate(width / 2, height / 2);
  // move the hour hand ( move 1/60th the speed of the minute hand )
  rotate(radians(theta / 3600));
  rect(-15, -85, 30, 100);
  pop();
  push();
  // move the origin back to the center of the canvas
  translate(width / 2, height / 2);
  // move the minute hand ( move 1/60th the speed of the seconds hand )
  rotate(radians(theta/60));
  rect(-10, -190, 20, 200);
  pop();
  push();
  // move the origin back to the center of the canvas
  translate(width / 2, height / 2);
  // move the seconds hand
  rotate(radians(theta));
  rect(-5, -270, 10, 300);
  pop();
  // increment the angle by one degree
  theta += 0.1;
}