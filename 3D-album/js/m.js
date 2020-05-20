var album = document.getElementById('album');
var musbox = document.getElementById('musbox');
var imgs = album.children;
var len = imgs.length;
var unitDeg = 360 / len;
var newX, newY, lastX, lastY, minusX, minusY;
var rotX = 0;
var rotY = 0;

const returnFalse = (e) => {
  e.preventDefault()
}
document.ontouchmove = returnFalse;
window.onload = ()=>{
    Array.prototype.forEach.call(imgs, (it, i, arr) => {
        it.style.transform = `rotateY(${i * unitDeg}deg) translateZ(200px)`
        it.style.transition = `1s ${(len - i) * 0.1}s`
        it.ontouchstart = returnFalse
    });
}