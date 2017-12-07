var cookies = 215;


function random(min, max) {
  return (Math.floor(Math.random() * (max - min)) + min)
}


function cookiesMaker() {

	for( i=1; i<cookies; i++) {
	var dropLeft = random(-500,1920);
	var dropTop = random(-2000,0);

	$('.dropArea').append('<div class="cookiesdrops" id="cookiesdrops'+i+'"></div>');
	$('#cookiesdrops'+i).css('left',dropLeft).css('top',dropTop).css('z-index', -1);

	}

}



cookiesMaker();
