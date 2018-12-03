// create a variable to control the direction of the ellipse
let control = false;
// make ellipse starting from the left end of the canvas
let radius=60;
let i=radius/2,j=radius/2;
let speedx=5,speedy=5;
function setup() {
    // create canvas
    createCanvas(800, 500);
    // set background color

}
function draw() {
    background('#31bc33');

    // when ellipse is in the left edge, control would be/become false
    if (i == radius/2) {
        control1 = false;
    }
    if (j == radius/2) {
        control2 = false;
    }
    // if ellipse is inside the canvas width (we substract 30 which is the radius
    // of our ellipse) and control is false
    if (control1 == false && i < (width - radius/2)) {
        i = i + speedx;
        // increase its x position (ellipse moves in the right direction)
    }
    else {
        control1 = true;
        // decrease its x position (ellipse moves in the left direction)
        i = i - speedx;
    }
    if (control2 == false && j < (height - radius/2)) {
        j = j + speedy;
        // increase its x position (ellipse moves in the right direction)
    }
    else {
        control2 = true;
        // decrease its x position (ellipse moves in the left direction)
        j = j - speedy;
    }
    ellipse(i, j, radius);
}