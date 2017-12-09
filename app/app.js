$(function(){

  var mainCookie = $('.cookie');
  var button = $('.btn');
  var amount = $('.amount');
  amount.text(cookieCounter);
  var productivity = $('.productivity') ;
  var productPerSecond = 0;
  var cookieCounter = 0;


  mainCookie.on('click', function(){
    cookieCouonter = 1 + parseInt(cookieCounter,10);
    console.log(cookieCounter);
    amount.text(cookieCounter);
  })
  setInterval(function(){
      amount.text(cookieCounter);
  },1000);

  // Function for button click:
  button.on('click', function(){

    if(parseInt(amount.text()) >= $(this).attr('data-price') && ($(this).attr('data-name') === 'cursor')){
      //SUBTRACT COST MAKER, COST & PRODUCTIVITY INCREASING
      cookieCounter = cookieCounter - $(this).attr('data-price');
      amount.text((amount.text() - $(this).attr('data-price')).toFixed(2));
      var newPrice = ($(this).attr('data-price') * 1 + 2).toFixed(2);
      $(this).attr('data-price', newPrice);
      var cost = $(this).parent().prev('.cost');
      cost.text($(this).attr('data-price'));

      setInterval(function(){
        mainCookie.trigger('click');
      },10000)
    }

    if(parseInt(amount.text()) >= $(this).attr('data-price') && ($(this).attr('data-name') === 'grandma')) {
      cookieCounter = cookieCounter - $(this).attr('data-price');
      amount.text((amount.text() - $(this).attr('data-price')).toFixed(2));
      var newPrice = ($(this).attr('data-price') * 1 + 2).toFixed(2);
      $(this).attr('data-price', newPrice);
      var cost = $(this).parent().prev('.cost');
      cost.text($(this).attr('data-price'));
      productPerSecond += parseInt($(this).attr('data-productivity'));
      productivity.text(productPerSecond);
      var cookiesPS = parseInt($(this).attr('data-productivity'));

      setInterval(function(){
        cookieCounter += cookiesPS ;
      },1000)


    }
    if(parseInt(amount.text()) >= $(this).attr('data-price') && ($(this).attr('data-name') === 'farm')) {
      cookieCounter = cookieCounter - $(this).attr('data-price');
      amount.text((amount.text() - $(this).attr('data-price')).toFixed(2));
      var newPrice = ($(this).attr('data-price') * 1 + 2).toFixed(2);
      $(this).attr('data-price', newPrice);
      var cost = $(this).parent().prev('.cost');
      cost.text($(this).attr('data-price'));
      productPerSecond += parseInt($(this).attr('data-productivity'));
      productivity.text(productPerSecond);
      var cookiesPS = parseInt($(this).attr('data-productivity'));

      setInterval(function(){
        cookieCounter += cookiesPS ;
      },1000)

    }
    if(parseInt(amount.text()) >= $(this).attr('data-price') && ($(this).attr('data-name') === 'bakery')) {
      cookieCounter = cookieCounter - $(this).attr('data-price');
      amount.text((amount.text() - $(this).attr('data-price')).toFixed(2));
      var newPrice = ($(this).attr('data-price') * 1.2 + 2).toFixed(2);
      $(this).attr('data-price', newPrice);
      var cost = $(this).parent().prev('.cost');
      cost.text($(this).attr('data-price'));
      productPerSecond += parseInt($(this).attr('data-productivity'));
      productivity.text(productPerSecond);
      var cookiesPS = parseInt($(this).attr('data-productivity'));

      setInterval(function(){
        cookieCounter += cookiesPS ;
      },1000)

    }
    if(parseInt(amount.text()) >= $(this).attr('data-price') && ($(this).attr('data-name') === 'mine')) {
      cookieCounter = cookieCounter - $(this).attr('data-price');
      amount.text((amount.text() - $(this).attr('data-price')).toFixed(2));
      var newPrice = ($(this).attr('data-price') * 1 + 2).toFixed(2);
      $(this).attr('data-price', newPrice);
      var cost = $(this).parent().prev('.cost');
      cost.text($(this).attr('data-price'));
      productPerSecond += parseInt($(this).attr('data-productivity'));
      productivity.text(productPerSecond);
      var cookiesPS = parseInt($(this).attr('data-productivity'));

      setInterval(function(){
        cookieCounter += cookiesPS ;
      },1000)

    }
  })

  productivity.text(productPerSecond);





})
