// Main set

var mainCookie = $('.cookie');
var button = $('.btn');
var amount = $('.amount');
amount.text(cookieCounterToView);
// var incrementGrandmaPPS ;
var productivityDisplay = $('.productivity') ;

var cookieCounterToView = 0;
var cookieAmountToView = 0;

var cost ={
  cursor: 15,
  grandma: 100,
  farm: 1100,
  bakery: 12000,
  mine: 130000
}

var volume = {
  cursor: 0,
  grandma: 0,
  farm: 0,
  bakery: 0,
  mine: 0
}

var productivity = {
  grandma: 1,
  farm: 8,
  bakery: 47,
  mine: 260
}

var productivityPS = {
  cursor: 0,
  grandma: 0,
  farm: 0,
  bakery: 0,
  mine: 0
}
// shorten a large number

function shorten(num) {
  if (num < 1000) {
    return num.toFixed(2);
  }
  if (num > 999) {
    return ((num/1000).toFixed(2) + 'k');

  }
  if(num > 999999) {
    return (num/1000000).toFixed(3) + 'mln';
  }
}

(function(){
  mainCookie.on("click", function () {
    cookieCounterToView++;
    engine.incCookieCounter(1);
    amount.text(shorten(cookieCounterToView));
});

// EVERY SECOND DO TICK ON ENGIN
setInterval(function () {
 engine.tick();
}, 1000);

  // DISPLAY SCORE, SCORE PER SECOND FUNCTION

  setInterval(function () {
    engine.incCookieCounter(engine.getProductPerSecond());
    cookieCounterToView = engine.getCookieCounter();
    amount.text(shorten(cookieCounterToView));
  }, 1000);

  // Function for button click:

  button.on('click', function(){
      var attribute = $(this).attr('data-name')

      if($(this).attr('data-name') === 'cursor'){

        engine.buyCursor();
        cookieCounterToView = engine.getCookieCounter();
        amount.text(cookieCounterToView);

        ($(this).parent().prev('.cost')).text(shorten(engine.getCursorPrice()));

        var displayAmount =  $(this).parent().parent().children().first();
        $(displayAmount).find('div.popup span.amountOfMakers').text(engine.getCursorVol());
  

      }

      if((engine.getCookieCounter() >= engine.getGrandmaPrice()) && ($(this).attr('data-name') === 'grandma')) {
        engine.incCookieCounter(- engine.getGrandmaPrice());
        cookieCounterToView = engine.getCookieCounter();
        amount.text(cookieCounterToView);

        engine.incGrandmaPrice(1.1);
        ($(this).parent().prev('.cost')).text(shorten(engine.getGrandmaPrice()));

        engine.incGrandmaVol(1);
        var displayAmount =  $(this).parent().parent().children().first();
        $(displayAmount).find('div.popup span.amountOfMakers').text(engine.getGrandmaVol());

        var incrementPPS = (engine.getGrandmaPPS());
        $(displayAmount).find('div.popup span.pps').text(incrementPPS);

        engine.incProductPerSecond(engine.getGrandmaPPS());
        productivityDisplay.text(shorten(engine.getProductPerSecond()));


      };

      if((engine.getCookieCounter() >= engine.getFarmPrice()) && ($(this).attr('data-name') === 'farm')) {
        engine.incCookieCounter(- engine.getFarmPrice());
        cookieCounterToView = engine.getCookieCounter();
        amount.text(cookieCounterToView);

        engine.incFarmPrice(1.1);
        ($(this).parent().prev('.cost')).text(shorten(engine.getFarmPrice()));

        engine.incFarmVol(1);
        var displayAmount =  $(this).parent().parent().children().first();
        $(displayAmount).find('div.popup span.amountOfMakers').text(engine.getFarmVol());

        var incrementPPS = (engine.getFarmPPS());
        $(displayAmount).find('div.popup span.pps').text(incrementPPS);

        engine.incProductPerSecond(engine.getFarmPPS());
        productivityDisplay.text(shorten(engine.getProductPerSecond()));


      };
      if((engine.getCookieCounter() >= engine.getBakeryPrice()) && ($(this).attr('data-name') === 'bakery')) {
        engine.incCookieCounter(- engine.getBakeryPrice());
        cookieCounterToView = engine.getCookieCounter();
        amount.text(cookieCounterToView);

        engine.incBakeryPrice(1.1);
        ($(this).parent().prev('.cost')).text(shorten(engine.getBakeryPrice()));

        engine.incBakeryVol(1);
        var displayAmount =  $(this).parent().parent().children().first();
        $(displayAmount).find('div.popup span.amountOfMakers').text(engine.getBakeryVol());

        var incrementPPS = (engine.getBakeryPPS());
        $(displayAmount).find('div.popup span.pps').text(incrementPPS);

        engine.incProductPerSecond(engine.getBakeryPPS());
        productivityDisplay.text(shorten(engine.getProductPerSecond()));


      };
      if((engine.getCookieCounter() >= engine.getMinePrice()) && ($(this).attr('data-name') === 'mine')) {
        engine.incCookieCounter(- engine.getMinePrice());
        cookieCounterToView = engine.getCookieCounter();
        amount.text(cookieCounterToView);

        engine.incMinePrice(1.1);
        ($(this).parent().prev('.cost')).text(shorten(engine.getMinePrice()));

        engine.incMineVol(1);
        var displayAmount =  $(this).parent().parent().children().first();
        $(displayAmount).find('div.popup span.amountOfMakers').text(engine.getMineVol());

        var incrementPPS = (engine.getMinePPS());
        $(displayAmount).find('div.popup span.pps').text(incrementPPS);

        engine.incProductPerSecond(engine.getMinePPS());
        productivityDisplay.text(shorten(engine.getProductPerSecond()));


      };



    // OTHER

      // else if(cookieCounter >= cost[attribute]){
      //
      //   cookieCounter -= cost[attribute];
      //   cookieCounterToView = cookieCounter;
      //   amount.text(cookieCounterToView);
      //
      //   cost[attribute] = (cost[attribute] * 1.1 ).toFixed(0);
      //   ($(this).parent().prev('.cost')).text(shorten(cost[attribute]));
      //
      //   volume[attribute]++;
      //   var displayAmount =  $(this).parent().parent().children().first();
      //   $(displayAmount).find('div.popup span.amountOfMakers').text(volume[attribute]);
      //
      //   productivityPS[attribute] += productivity[attribute];
      //   $(displayAmount).find('div.popup span.pps').text(productivityPS[attribute]);
      //
      //   productPerSecond += productivity[attribute];
      //   productivityDisplay.text(shorten(productPerSecond));
      //
      // }
  });
})();
