var points=[];
var vehicles=[];
var myfont;
var zloop=0;
function preload(){
  myfont=loadFont('http://192.168.21.198:8000/static/anim/font/Digitalt.otf');
}
function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
  //textAlign(CENTER);
  points=myfont.textToPoints('TECHTIX',0,0,70, {
    sampleFactor: 1,
  });
  angleMode(DEGREES);
/*  console.log(points.length);
  for (var i = 0; i < points.length; i++) {
   var pt = points[i];
   //var vehicle = new Vehicle(pt.x, pt.y );
   //vehicles.push(vehicle);
   frameRate(60);
    stroke(255);
    strokeWeight(8);
    fill(255);
   point(pt.x, pt.y);

 }*/
// frameRate(1);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
function draw() {
  //background(0);
  orbitControl();
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  //translate(-width/2,-height/2);
  background(51);
  stroke(0);
  //noStroke();
  fill(255);
//  beginShape(TRIANGLE_STRIP);
push();
translate(-30*4,0);
  for(var i=0;i<points.length;i++)
  {
    var p=points[i];
    //push();
    //translate(p.x*8,p.y*8);
    if(frameCount<45){
      fill(0);
    rotateX(frameCount);
    //console.log(frameCount * 0.01);
    rotateY(frameCount);
    rotateZ(frameCount);
    rotate(frameCount);
    //fill(round(random(0,255)),round(random(0,255)),round(random(0,255)));

  }
  //else if (frameCount==180) {

  //}
  else if (frameCount==45) {
    rotateX(360);
    rotateY(360);
    rotateZ(360);
  }
    //rect(p.x,p.y,3,3);
    push();
    translate(p.x,p.y);
    box(1,1,10);
    pop();
    //pop();
  }
  pop();
  //ellipse(0,0,300,300);
  line(300*sin(frameCount),300*cos(frameCount),310*sin(frameCount),310*cos(frameCount));

//  endShape();

}
function Vehicle(x, y) {
  this.pos = createVector(random(0,width), random(0,height));
  this.target = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = 2;
  this.maxspeed = 10;
  this.maxforce = 1;
}

Vehicle.prototype.behaviors = function() {
  var arrive = this.arrive(this.target);
  var mouse = createVector(mouseX, mouseY);
  var flee = this.flee(mouse);

  arrive.mult(1);
  flee.mult(3);

  this.applyForce(arrive);
  this.applyForce(flee);
}

Vehicle.prototype.applyForce = function(f) {
  this.acc.add(f);
}

Vehicle.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}

Vehicle.prototype.show = function() {
  //stroke(255);
  strokeWeight(1);
  fill(0,230,0);

  //translate(this.pos.x,this.pos.y);
  //fill(0,230,0);
  //box(2);
  //point(0,0);
  rect(this.pos.x,this.pos.y,1,1);


  //point(this.pos.x, this.pos.y);
}


Vehicle.prototype.arrive = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  var speed = this.maxspeed;
  if (d < 100) {
    speed = map(d, 0, 100, 0, this.maxspeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
}

Vehicle.prototype.flee = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  if (d < 50) {
    desired.setMag(this.maxspeed);
    desired.mult(-1);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0, 0);
  }
}
