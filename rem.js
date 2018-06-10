addEventListener('resize',function f(){
  var html=document.documentElement,width=html.clientWidth;
  html.style.fontSize=(width>720?720:width)*100/640+'px';
  return f
}());
