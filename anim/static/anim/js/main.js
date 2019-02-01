console.log('animate');
var xhr = new XMLHttpRequest;
xhr.open('get','http://127.0.0.1:8000/static/anim/img/new.svg',true);
xhr.onreadystatechange = function(){
  if (xhr.readyState != 4) return;
  var svg = xhr.responseXML.documentElement;
  svg = document.importNode(svg,true); // surprisingly optional in these browsers
  document.body.appendChild(svg);
  var bigLove=document.getElementById('bigLove');
TweenMax.from(bigLove,10,{opacity:0});
};
xhr.send();

 document.getElementById("LogoE").style.height = "600px";

var mainLogo=TweenMax.from(".Logo",5, {opacity:0,ease:Power1.easeInOut,onComplete:onComplete});
function onComplete() {
  console.log("onComplete");
}
