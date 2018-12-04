function setup() {
    createCanvas(800, 600);
    // set background color
    background('#D66761');
}
function draw() {
    // state the fill color of the shape
    fill('#FBEFCC');
    // state the border color of the shape
    stroke('#FBEFCC');
    // state the border weight of the shape
    strokeWeight(2);
    // create the face ellipse
    ellipse(width / 2, height / 2, 200, 300)
    // state the border color of the outer eye circle
    stroke('#A2836E');
    // for the left eye
    // draw the base ellipse, the sclera/“white of the eye”
    ellipse(350, 275, 50, 25);
    // state the border of the iris
    stroke('black');
    // draw the Iris for the eye
    ellipse(350, 275, 25);
    // fill the center of the eye
    fill('#034F84');
    // color the border
    stroke('#034F84');
    // draw the center of the eye
    ellipse(350, 275, 12.5);
    // state the border color of the outer eye circle
    stroke('#A2836E');
    // for the right eye
    // draw the base ellipse for the eye, the sclera/“white of the eye”
    noFill();
    ellipse(450, 275, 50, 25);
    // state the border of the iris
    stroke('black');
    // draw the Iris for the eye
    ellipse(450, 275, 25);
    // fill the center of the eye
    fill('#034F84');
    // color the border
    stroke('#034F84');
    // draw the center of the eye
    ellipse(450, 275, 12.5);
}