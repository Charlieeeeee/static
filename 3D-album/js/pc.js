var album = document.getElementById('album');
var imgs = album.children;
var len = imgs.length
var unitDeg = 360 / len
var newX, newY, lastX, lastY, minusX, minusY
var rotX = 0
var rotY = 0

const returnFalse = (e) => {
  e.preventDefault()
}
window.onload = ()=>{
    Array.prototype.forEach.call(imgs, (it, i, arr) => {
        it.style.transform = `rotateY(${i * unitDeg}deg) translateZ(300px)`
        it.style.transition = `1s ${(len - i) * 0.1}s`
        it.onmousedown = returnFalse
  })
  //   鼠标移动 相册旋转 改变album的transform 的rotateX 和 rotateY的值
  document.onmousedown = function (e) { // 鼠标点击事件
    lastX = e.clientX
    lastY = e.clientY
    this.onmousemove= (e) => { // 鼠标移动事件
      newX = e.clientX
      newY = e.clientY

      // 假设 并求值 两次鼠标移动的差值就是移动的距离 和相册旋转的角度成正比
      minusX = newX - lastX
      minusY = newY - lastY

      rotX += minusY
      rotY += minusX

      album.style.transform = `rotateX(${-rotX * 0.2}deg) rotateY(${rotY * 0.2}deg)`

      // 新的值用完之后就成了旧的值
      lastX = newX
      lastY = newY
    }
    this.onmouseup = (e) => { // 鼠标松开事件
      this.onmousemove = null
    }
  }
}