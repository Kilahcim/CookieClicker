var icon = $('.icon');
var popup = $('.popup')

icon.on('mouseenter', function(icon){

  $(this).next().css("display", "block")

})
icon.on('mouseleave', function(){
  $(this).next().css("display", "none")
})
