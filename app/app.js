$(function(){

  var mainCookie = $('.cookie');
  var button = $('.btn');
  var amount = $('.amount');
  amount.text(cookieCounter);
  var productivity = $('.productivity') ;
  var productPerSecond = 0;
  var cookieCounter = amount.text();
  setInterval(function(){
      amount.text(cookieCounter);
  },1000);

  mainCookie.on('click', function(){
    cookieCounter++;
    amount.text(cookieCounter);
  })

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
      setInterval(function(){
        cookieCounter += 8;
      },1000)

    }
    if(parseInt(amount.text()) >= $(this).attr('data-price') && ($(this).attr('data-name') === 'farm')) {
      cookieCounter = cookieCounter - $(this).attr('data-price');
      amount.text((amount.text() - $(this).attr('data-price')).toFixed(2));
      var newPrice = ($(this).attr('data-price') * 1 + 2).toFixed(2);
      $(this).attr('data-price', newPrice);
      var cost = $(this).parent().prev('.cost');
      cost.text($(this).attr('data-price'));
      setInterval(function(){
        cookieCounter += 64;
      },1000)

    }
    if(parseInt(amount.text()) >= $(this).attr('data-price') && ($(this).attr('data-name') === 'bakery')) {
      cookieCounter = cookieCounter - $(this).attr('data-price');
      amount.text((amount.text() - $(this).attr('data-price')).toFixed(2));
      var newPrice = ($(this).attr('data-price') * 1 + 2).toFixed(2);
      $(this).attr('data-price', newPrice);
      var cost = $(this).parent().prev('.cost');
      cost.text($(this).attr('data-price'));
      setInterval(function(){
        cookieCounter += 512;
      },1000)

    }
    if(parseInt(amount.text()) >= $(this).attr('data-price') && ($(this).attr('data-name') === 'mine')) {
      cookieCounter = cookieCounter - $(this).attr('data-price');
      amount.text((amount.text() - $(this).attr('data-price')).toFixed(2));
      var newPrice = ($(this).attr('data-price') * 1 + 2).toFixed(2);
      $(this).attr('data-price', newPrice);
      var cost = $(this).parent().prev('.cost');
      cost.text($(this).attr('data-price'));
      setInterval(function(){
        cookieCounter += 4096;
      },1000)

    }
  })

  productivity.text(productPerSecond);





})
