let mic;
function setup() {
createCanvas(400, 400);
mic = new p5.AudioIn();
mic.start();
}
function draw() {
//background(220);
// fill(r,g,b);
let volume = mic.getLevel(); 
let circleSize = map (volume, 0, 1, 50, height);
r = map (volume, 0, 1, 0, 255);
g = map (volume, 0, 1, 0, 255);
b = map (volume, 0, 1, 0, 255);
fill(r,g,b);
circle(width/2, height/2, circleSize);
print("volume", volume);
}

function keyPressed() {
background(random(255), random(255), random(255));
if (key = "r") {
  background(255, 0, 0);

}
if (key = "B") {
  background(0, 0, 255);
}

}