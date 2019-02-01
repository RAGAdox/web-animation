function Vehicle(x, y, i,stWt) {
  this.angle=0;
  this.pos = createVector(300*cos(i),300*sin(i));
  this.target = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = stWt;
  this.maxspeed = 45;
  this.maxforce = 3;
}
Vehicle.prototype.behaviors = function() {
  var arrive = this.arrive(this.target);
  arrive.mult(2);
  this.applyForce(arrive);
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
  stroke(255);
  fill(255);
  strokeWeight(5);
	push();
	translate(this.pos.x,this.pos.y);
	//rotateX(frameCount*5);
  rotateY(frameCount*10);
  rotateZ(frameCount*10);
	rect(0,0,5,2);
	pop();
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
