document.addEventListener('DOMContentLoaded', function(){
  var noOfCookies = 60;
  var canvas = document.querySelector('canvas');
  var width = window.innerWidth;
  var height = window.innerHeight;
  var img =  new Image();
  img.src = "images/cookie.png";
  canvas.width = width;
  canvas.height = height;
  var context = canvas.getContext('2d');
  var cookiesArray = [];

  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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
  }

  resizeCanvas();

  function draw(){
    context.fillstyle = "rgb(0,0,0)";
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
