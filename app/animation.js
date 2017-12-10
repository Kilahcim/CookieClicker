var cookies = 215;

// dla różnych rozdzielczości muszą być napisane różne przedziały losowania
function random(min, max) {
  return (Math.floor(Math.random() * (max - min)) + min)
}


function cookiesMaker() {

	for( i=1; i<cookies; i++) {
	var dropLeft = random(-500,1920);
	var dropTop = random(-500,2000);

	$('.dropArea').append('<div class="cookiesdrops" id="cookiesdrops'+i+'"></div>');
	$('#cookiesdrops'+i).css('left',dropLeft).css('top',dropTop).css('z-index', -1);

	}

}


cookiesMaker();

setInterval(function() {
  cookiesMaker();
  console.log("tu");
}
,5000)
