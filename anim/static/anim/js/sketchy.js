var cols, rows;
var scl = 20;
var w = 3040;
var h = 1000;
let timer = 0;
var cam;
var flying = 0;
var starsX=[];
var starsY=[];
var starsZ=[];
var terrain = [];
var stars=[];
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cols = w / scl;
  rows = h/ scl;
  cam=PI/12;
  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
  for(var i=0;i<1000;i++)
  {
    starsX[i]=random(40,width-40);
    starsY[i]=+random(40,height/2-20);
    starsZ[i]=random(-1080,1920);
    var star=new Stars(width/2-starsX[i],-height/2+starsY[i],starsZ[i]);
    stars.push(star);
  }
}

function draw() {
   background(0);
   /*
  if (frameCount % 60 == 0 ) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0 //&& timer > 0
    timer ++;
  }
//  background(255);
  //directionalLight(240,width/2-100, -height/3, -100);
  //ambientLight(250)
  //  orbitControl();
//  ambientMaterial(250);
  noStroke();
  fill(255);
  ellipse(width/2-100,-height/3, 30, 30);
  for(var i=0;i<1000;i++)
  {
    stars[i].draw();
    //if(frameCount%10==0)
    //    stars[round(random(0,200))].glow();
    //stars[round(random(0,200))].glow();

    //point draw


    //  point(width/2-starsX[i],-height/2+starsY[i],starsZ[i]);

    /*if (timer%3==0&&i%2==0 ){
      strokeWeight(round(random(1,3)));
    }*/
  /*}
  if(timer%2==0)
    {
      stars[round(random(0,200))].glow();
      stars[round(random(0,200))].glow();
    }
    else{
      stars[round(random(0,200))].glow();
      stars[round(random(0,200))].glow();
    }
  console.log(width/2-starsX[0]);
  console.log(-height/3+starsY[0]);
  //rotateX(PI/2-PI/12);
  flying -= 0.1;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }



  translate(0, 150);

  noStroke();
  fill(50,50,204,100);

  rotateX(PI/2-PI/12);
  translate(-w/2, -h/2);
  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    //endShape();
  }
  */
}
/*
function Stars(x,y,z)
{
  this.x=x;
  this.y=y;
  this.z=z;
  this.draw=function(){
    stroke(120,120,255,round(random(0,255)));
    strokeWeight(1);
    point(this.x,this.y,this.z);
  }
  this.glow=function(){
    stroke(255,round(random(0,255)));
    strokeWeight(round(random(1,4)));
    point(this.x,this.y,this.z);
  }
}
*/
