//TweenMax.to(".logo",2, {left: window.innerWidth/2});
//TweenMax.from(".logo",2, {y:300,x:100,opacity:0});
//TweenMax.fromTo(".tag",2, {y:300,x:100},{y:400,x:160});
//TweenMax.set(".fun", {y:0,x:0});
//TweenMax.to(".fun",2, {y: window.innerWidth/2}); Cannot be used if element is already set
//TweenMax.from(".tag",2,{opacity:0});
//TweenMax.from(".st0",3,{y:100});
//TweenMax.from("#t1",2,{y:-100});
//TweenMax.to("#t1",2,{fill:"rgb(255,0,255)"});
//TweenMax.to(".st0",10,{stroke:"rgb(255,255,255)"});
console.log('animate');
var xhr = new XMLHttpRequest;
xhr.open('get','http://127.0.0.1:8000/static/anim/img/new.svg',true);
xhr.onreadystatechange = function(){
  if (xhr.readyState != 4) return;
  var svg = xhr.responseXML.documentElement;
  svg = document.importNode(svg,true); // surprisingly optional in these browsers
  document.body.appendChild(svg);
  //console.log(document.getElementById('bigLove'));
  var bigLove=document.getElementById('bigLove');
TweenMax.from(bigLove,10,{opacity:0});
};
xhr.send();
/*d3.xml("http://127.0.0.1:8000/static/anim/img/new.svg", "image/svg+xml", function(xml) {
  document.getElementById('lets').appendChild(xml.documentElement);
var bigLove=document.getElementById('bigLove');
TweenMax.from(bigLove,10,{opacity:0});
});*/

//TweenMax.from(bigLove,10,{opacity:0});

 document.getElementById("LogoE").style.height = "600px";
//TweenMax.from(".Logo",10,{opacity:0});
var mainLogo=TweenMax.from(".Logo",5, {opacity:0,ease:Power1.easeInOut,onComplete:onComplete});
function onComplete() {
  console.log("onComplete");
  //animate opacity shrink and translate to top left
//TweenMax.to(".Logo",0, {opacity:0});
//  document.body.style.backgroundColor = "black";


}
//TweenMax.to(".Logo",10, {opacity:0});
