let width = 800, height = 500, radius = 20, smallRadius = 5;
let x, y;
let r,g,b,row3;
let step = 256/(((width-2*radius)/(40+radius))*(height-2*radius)/(100+radius));
function setup() {
    // create canvas
    createCanvas(width, height);
    // set background color
    background('purple');
}
function draw() {
    r=256;
    g=128;
    b=0;
    for (y = radius; y < height - radius; y += 100 + radius) {
        for (x = radius; x < width - radius; x += 40 + radius) {
            fill(r,g,b);
            ellipse(x, y, radius);
            r-=step;
            b+=step; 
            if (y==(radius + (100 + radius)*2)){
                fill("yellow");
                ellipse(x,y,smallRadius);
            }     
        }
    }
}