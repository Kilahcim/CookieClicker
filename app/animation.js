document.addEventListener('DOMContentLoaded', function(){
  var noOfCookies = 100;
  var canvas = document.querySelector('canvas');
  var width = window.innerWidth;
  var height = window.innerHeight;
  var img =  new Image();
  img.src = "images/cookie.png";
  var imgBG = new Image();
  imgBG.src = "images/background.jpg"
  canvas.width = width;
  canvas.height = height;
  var context = canvas.getContext('2d');
  var cookiesArray = [];


  for(var i = 0; i < noOfCookies; i++){
    var x = Math.floor(Math.random()*canvas.width);
    var y = Math.floor(Math.random()*canvas.height);
    cookiesArray[i] =  new cookieMaker(x,y);

  }


  function cookieMaker(x, y) {
    this.x = x;
    this.y = y;

    this.fall = function(){
      this.y++;
      if(this.y > canvas.height){
        this.y = 0;
      }
    }

    this.show = function(){
      context.drawImage(img, this.x, this.y, 20,20);
    }
  }

  function draw(){
    //  ctx.drawImage(imgBg, 0, 0)
    context.fillstyle = "rgba(255, 255, 255, 0)";
    // ctx.globalAlpha = 0.2;
    context.fillRect(0, 0, canvas.width, canvas.height)
    for(var i = 0; i < noOfCookies; i++){
      cookiesArray[i].show();
      cookiesArray[i].fall()
    }

  }
  function repeat() {
    draw();
    window.requestAnimationFrame(repeat)
  }

  repeat();

})
