var orbits;
var myfont;
var techtix;
function preload(){
  myfont=loadFont('http://192.168.21.198:8000/static/anim/font/Digitalt.otf');
}
function setup()
{
  createCanvas(windowWidth,windowHeight,WEBGL);
  background(51);
  orbits=new Indi(10);
  angleMode(DEGREES);
  techtix=new aniText('TECHTIX');
  techtix.setPoint();
}
function draw(){
  background(51);
  orbits.draw();
  techtix.drawPoints();
}
function aniText(str){
  this.str=str;
  this.points=[];
  this.drawFinal=false;
  this.setPoint=function(){
    this.points=myfont.textToPoints(str,0,0,70, {
      sampleFactor: 1,
    });
  }
  this.drawPoints=function(){
    push();
    if(this.drawFinal==true)
      translate(-30*4,0);
    for(var i=0;i<this.points.length;i++)
    {
      var p=this.points[i];
      push();
      if(frameCount<360){
        var t=random(0,360);
        var r=random(0,300);
      translate(r*cos(t),r*sin(t));
    }else if (frameCount==360) {
      this.drawFinal=true;
    }
      else {
        translate(p.x,p.y);
      }
      box(1,1,10);
      pop();
    }
    pop();
  }
}
function Indi(x) {
  this.cenX=0;
  this.cenY=0;
  this.rad=300;
  this.tlen=310;
  this.draw=function(){
    /*if(frameCount<=360)
    line(this.rad*sin(frameCount),this.rad*cos(frameCount),this.tlen*sin(frameCount),this.tlen*cos(frameCount));*/
    for(var i=0;i<=frameCount;i++)
      line(this.rad*sin(i),this.rad*cos(i),this.tlen*sin(i),this.tlen*cos(i));
  }
}
