var streams=[];
var font;
var progressBar;
var progress;
var textEnter;
var space=30;
let timer = 2;
var fadeInterval=1.6;
var symbolSize=14;
var letters=[];
var a10=0,a40=0,a50=0;
var animOver=false;
var pressEnter=false;
var eventCat=['Robotics','Gamming Zone','Codeing Zone','Inquizimenia','Misilanious'];
var eventCats=[];
var curCat=0;
var objCat;
var img;
var myFont;
function preload() {
  myFont=loadFont('http://127.0.0.1:8000/static/anim/font/8.ttf');
  eventCats.push(new EventCat('Robotics','http://127.0.0.1:8000/static/anim/img/robotics.jpeg'));
  eventCats.push(new EventCat('Gamming Zone','http://127.0.0.1:8000/static/anim/img/gaming.jpeg'));
  eventCats.push(new EventCat('Codeing Zone','http://127.0.0.1:8000/static/anim/img/code.jpeg'));
  eventCats.push(new EventCat('Inquizimenia','http://127.0.0.1:8000/static/anim/img/inq.jpeg'));
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0);
  img = loadImage('http://127.0.0.1:8000/static/anim/img/code.jpeg');
  progressBar=new ProgressBar(width/2,height/2,290);
  textEnter=new TextFrame();
  //for matrix streams
  //for trying boootstrap responsiveness
  if(width<=576){
    symbolSize=20;
  }else if (width<=768) {
    symbolSize=18;
  }else if (width<=992) {
    symbolSize=16;
  }
  else {
    symbolSize=14;
  }
  var x=0;
  for(var i=0;i<width/symbolSize;i++){
    var stream=new Stream();
    stream.generateSymbols(x,random(-200,0));
    streams.push(stream);
    x+=symbolSize;
  }
  textFont('Consolas');
  textSize(symbolSize);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
  if(width<=576){
    symbolSize=20;
  }else if (width<=768) {
    symbolSize=18;
  }else if (width<=992) {
    symbolSize=16;
  }
  else {
    symbolSize=14;
  }
}
function draw(){
if(pressEnter==false){
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  background(0,150);
  if(timer!=0){
    streams.forEach(function(stream){
      stream.render();
    });
  }
  else {
    //Writing TECHTIX
    var techtix=new Techtix();
    techtix.draw();
    techtix.animate();

    var h=10;
    if(a40>=40&&a50>=40)
    {
        progressBar.draw();
        progressBar.update();
    }
    if(animOver==true)
    {
        //console.log('animation over');
        //techtix.mAnimate();
        textEnter.dr();
    }
  }
}else{
  background(0);
  eventCats[curCat].draw();
  //textAlign(CENTER);
  //text(eventCat[curCat],width/2,height/2);
  /*imageMode(CENTER);
  image(img,width/2,height/2,width/2,height/2);
  textAlign(CENTER);
  text(eventCat[curCat],width/2,height/2);*/
}
}
function keyPressed() {
  if (keyCode === ENTER) {
    background(255);
    if(animOver==true)
      pressEnter=true;
  //  rotate(cos(PI/3));
  //  remove();
  //  createNewCanvas();
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
  }
}
function mouseWheel(event) {
  if(event.delta>0){
    if(curCat<eventCats.length-1)
      curCat++;
    else {
      curCat=0;
    }
  }
  else {
    if(curCat>0)
      curCat--;
    else {
      curCat=eventCats.length-1;
    }
  }
}
function Symbol(x,y,speed,first,opacity){
  this.x=x;
  this.y=y;
  this.value;
  this.speed=speed;
  this.first=first;
  this.opacity=opacity;
  this.switchInterval=round(random(2,25));
  this.setToRandomSymbol=function(){
    var charType=round(random(0,5));
    if(frameCount%this.switchInterval==0){
      if(charType>1){
        this.value=String.fromCharCode(0x30A0+round(random(0,96)));
      }
      else {
        this.value=round(random(0,9));
      }
    }
  }
  this.rain=function(){
    this.y=(this.y>=height)?0:this.y+=this.speed;
  }
}
function Stream(){
  this.symbols=[];
  this.totalSymbols=round(random(5,35));
  this.speed=random(5,22);
  this.generateSymbols=function(x,y){
    var opacity=255;
    var first=round(random(0,4))==1;
    for(var i=0;i<=this.totalSymbols;i++){
      symbol=new Symbol(x,y,this.speed,first,opacity);
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      opacity-=(255/this.totalSymbols)/fadeInterval;
      y-=symbolSize;
      first=false;
    }
  }
  this.render=function(){
    this.symbols.forEach(function(symbol){
      if(symbol.first){
        fill(140,255,170,symbol.opacity);
      }else {
        fill(0,255,70,symbol.opacity);
      }
      text(symbol.value,symbol.x,symbol.y);
      symbol.rain();
      symbol.setToRandomSymbol();
    });
  }
}
function ProgressBar(x,y,max)
{
  this.x=x;
  this.y=y;
  this.cur=20;
  this.draw=function(){
    rect(this.x,this.y,this.cur,10,10);
  }
  this.update=function() {
    if(this.cur<=285)
    this.cur+=10;
    this.draw();
    if(this.cur==280)
      animOver=true;
  }
}
function Techtix(){
  this.draw=function(){
    fill(color(0,255,0));
    noStroke();
    /*rect(0,height,300,20);
    rect(width/2-space*4,height/2,10,a50);//vertical T
    rect(width/2-15-space*4,height/2,a40,10);//Horizontal T
    rect(width/2-space*3,height/2,a40,10);//top horizontal E
    rect(width/2-space*3,height/2+20,a40,10);//middle horizontal E
    rect(width/2-space*3,height/2+40,a40,10);//bottom horizontal E
    rect(width/2-space*3,height/2,10,a50);//vertical E
    rect(width/2-space*1.5,height/2,10,a50);//vertical C
    rect(width/2-space*1.5,height/2,a40,10);//top horizontal C
    rect(width/2-space*1.5,height/2+40,a40,10);//buttom horizontal C
    rect(width/2,height/2,10,a50);//left vertical H
    rect(width/2,height/2+20,a40,10);//middle horizontal H
    rect(width/2+space,height/2,10,a50);//right Horizontal H
    rect(width/2+space*2,height/2,10,a50);//vertical T
    rect(width/2-15+space*2,height/2,a40,10);//Horizontal T
    rect(width/2+space*3,height/2,10,a50);//VERTICAL I
    quad(width/2+space*4,height/2,width/2+space*3+15,height/2,width/2+space*5-15,height/2+50,width/2+space*5,height/2+50);// '\' of X
    quad(width/2+space*5,height/2,width/2+space*5-15,height/2,width/2+space*3+15,height/2+50,width/2+space*4,height/2+50,);// '/' of X
    */
    textAlign(CENTER)
    textFont(myFont);
    textSize(46);
    text('TECHTIX',400,400);
  }
  this.animate=function(){
    if(a50<=50)
      a50+=0.5
    if (a40<=40||a50<=40) {
      a40+=0.5;
    }
    this.draw();
  }
  this.mAnimate=function(){
    //background(0);

    this.draw();
  }
}
function TextFrame(x,y)
{
  this.x=x;
  this.y=y;
  this.str='Press Enter To Continue';
  this.pos=1;
  this.dr=function(){
    //textAlign(LEFT);
    textFont(myFont);
    textSize(18);
    text(this.str.slice(0,this.pos),width/2+130-space*4,height/2+80);
    this.pos++;
    frameRate(10);
    if(this.pos==this.str.length-1)
      frameRate(60);
  }
}
function EventCat(str,imgPath){
  this.str=str;
  this.img=loadImage(imgPath);
  this.draw=function()
  {
    background(0);
    imageMode(CENTER);
    image(this.img,width/2,height/2-height/8,width/2,height/2);
    textAlign(CENTER);
    textSize(32);
    textFont(myFont);
    text(this.str,width/2,height/2+height/3);
  }
}
