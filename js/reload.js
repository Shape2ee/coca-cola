"use strict";

let timer = null;
function resizeComplete() {
  // 리사이즈 함수 사용
  document.location.reload();
}

window.addEventListener('resize', function() {
  clearTimeout(timer);
  timer = setTimeout(resizeComplete, 400);
}, false);

