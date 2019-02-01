var img;
function preload(){
   img = loadImage('http://127.0.0.1:8000/static/anim/img/code.jpeg');
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  image(img, 0, 0);
}
