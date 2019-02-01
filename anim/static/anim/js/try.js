var vehicles=[];
var img;
var myfont;
var symbolSize=196;
var strokeWt=5;
var eventCats=['ROBOTICS','GAMING','INQUIZIMENIA','CODING'];
var curCat=-1;
var isFwd=1;
var randPoints=[];
var angle;
function preload(){
  myfont=loadFont('http://127.0.0.1:8000/static/anim/font/n1.ttf');
  img = loadImage('http://127.0.0.1:8000/static/anim/img/design.png');
}
function RandPoint(){
  this.x=random(-5*width,5*width);
  this.y=random(-5*height,0);
  this.z=random(0,-1000);
  /*this.randomizeP=function() {
    this.x=random(-width,width);
    this.y=random(-height,height);
    this.z=random(0,-100);
  }*/
  this.renderP=function(){
    push();
    camera(0,0,1000+frameCount*5,0,0, 0, 0,1, 0);
    translate(this.x,this.y,this.z);
    strokeWeight(2);
    stroke(255);
    fill(255);
    point(0,0);
    pop();
  }
}
function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
//  smooth();
  background(0);
  if(width<=780){
    symbolSize=35;
    strokeWt=4;
  }
  else
    symbolSize=80;
  frameRate(60);
  for(var i=0;i<1000;i++)
  {
    var r=new RandPoint();
    randPoints.push(r);
  }
  angleMode(DEGREES);
  var bounds=myfont.textBounds('T E C H T I X',0,0,symbolSize, {
    sampleFactor: 0.01
  });
  var points = myfont.textToPoints('T E C H T I X',0-bounds.w/2,-height/3,symbolSize, {
    sampleFactor: 0.15
  });
  console.log(bounds.x,bounds.y,bounds.w,bounds.h);
  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y,i,strokeWt);
    vehicles.push(vehicle);
  }
}
function draw() {
  background(0);
//  orbitControl();
//  rect(0,height/2-20,10,10);
//image(img, 0, height / 2, img.width / 2, img.height / 2);
  for(var i=0;i<randPoints.length;i++)
  {
    randPoints[i].renderP();
  }
  push();
  //rotateY(mouseY*0.5);
  //angle=map(mouseX*0.5,0,10,-width/2,width/2);
  angle=mouseY*0.5%30;
  //rotateY(angle);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
  pop();
}
function noscroll() {
  window.scrollTo( 0, 0 );
  var eventCats=['R O B O T I C S','G A M I N G','I N Q U I Z I M E N I A','C O D I N G'];
	if(curCat>3)
	curCat=-1;
  drawText(eventCats[++curCat],eventCats[curCat].length);

}

window.addEventListener('scroll', noscroll);
function drawText(str,len)
{
  background(51);
  var bounds=myfont.textBounds(str,0,height/10,symbolSize, {
    sampleFactor: 0.05
  });
  var points = myfont.textToPoints(str,0-bounds.w/2,-height/3,symbolSize, {
    sampleFactor: 0.15
  });

vehicles=[];
  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y,i,strokeWt);
    vehicles.push(vehicle);
  }
}

function myFunction(str) {
//  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
//alert('h');
switch (str) {
  case 'inq':
    drawText(eventCats[2],eventCats[2].length);
    break;
  case 'cod':
      drawText(eventCats[2],eventCats[2].length);
    break;
  case 'gam':
        drawText(eventCats[2],eventCats[2].length);
      break;
  case 'rob':
          drawText(eventCats[2],eventCats[2].length);
      break;
  default:
  alert('h');

}

}
/*function mousePressed() {

  alert(eventCats[curCat]);

}*/
