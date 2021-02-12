var scAngle;
var mnAngle;
var hrAngle;

var hr;
var mn;
var sc; 


function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);

}

function draw() {
 hr = hour();
 mn = minute();
 sc = second(); 

  

  background(0,0,0); 

  scAngle = map(sc,0,60,0,360)
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr,0,12,0,360)

  translate(400,200)
  rotate(-90)

  push();
  rotate(scAngle)
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,80,0);
  pop();

  push();
  rotate(mnAngle)
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle)
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  strokeWeight(10)
  noFill();

  stroke(0,0,255)
  arc(0,0,300,300,0,scAngle)

  stroke(0,255,0)
  arc(0,0,260,260,0,mnAngle)

  stroke(255,0,0)
  arc(0,0,280,280,0,hrAngle)

  drawSprites();
}