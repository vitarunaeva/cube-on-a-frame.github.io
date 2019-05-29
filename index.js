var boxEl = document.querySelector('a-box');
 boxEl.addEventListener('mouseenter', function () {
   this.boxEl.setAttribute('scale', {x: 3, y: 3, z: 3})
 });
