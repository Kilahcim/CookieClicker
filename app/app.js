var mainCookie = $('.cookie');
var button = $('.btn');
var amount = $('.amount');
amount.text(cookieCounterToView);
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

function shorten(num) {
  if ((num < 1000) && (num > 1000000)) {
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

setInterval(function () {
 engine.tick();
}, 1000);


setInterval(function() {
  engine.incCookieCounter(engine.getProductPerSecond());
}, 1000)

setInterval(function () {
  cookieCounterToView = engine.getCookieCounter();
  amount.text(shorten(cookieCounterToView));
}, 1);


button.on('click', function(){
  var attribute = $(this).attr('data-name')
  var displayAmount =  $(this).parent().parent().children().first();

  if((engine.getCookieCounter() >= engine.getCursorPrice()) && ($(this).attr('data-name') === 'cursor')){

    engine.incCookieCounter(- engine.getCursorPrice());
    cookieCounterToView = engine.getCookieCounter();
    amount.text(cookieCounterToView);

    engine.incCursorPrice(1.1);
    ($(this).parent().prev('.cost')).text(shorten(engine.getCursorPrice()));

    engine.incCursorVol(1);
    $(displayAmount).find('div.popup span.amountOfMakers').text(engine.getCursorVol());


  }

  if((engine.getCookieCounter() >= engine.getGrandmaPrice()) && ($(this).attr('data-name') === 'grandma')) {
    engine.incCookieCounter(- engine.getGrandmaPrice());
    cookieCounterToView = engine.getCookieCounter();
    amount.text(cookieCounterToView);

    engine.incGrandmaPrice(1.1);
    ($(this).parent().prev('.cost')).text(shorten(engine.getGrandmaPrice()));

    engine.incGrandmaVol(1);
    $(displayAmount).find('div.popup span.amountOfMakers').text(engine.getGrandmaVol());

    engine.incGrandmaPPS(1);
    $(displayAmount).find('div.popup span.pps').text(engine.getGrandmaPPS());

    engine.incProductPerSecond(1);
    productivityDisplay.text(shorten(engine.getProductPerSecond()));
  };

  if((engine.getCookieCounter() >= engine.getFarmPrice()) && ($(this).attr('data-name') === 'farm')) {
    engine.incCookieCounter(- engine.getFarmPrice());
    cookieCounterToView = engine.getCookieCounter();
    amount.text(cookieCounterToView);

    engine.incFarmPrice(1.1);
    ($(this).parent().prev('.cost')).text(shorten(engine.getFarmPrice()));

    engine.incFarmVol(1);
    $(displayAmount).find('div.popup span.amountOfMakers').text(engine.getFarmVol());

    engine.incFarmPPS(8);
    $(displayAmount).find('div.popup span.pps').text(engine.getFarmPPS());

    engine.incProductPerSecond(8);
    productivityDisplay.text(shorten(engine.getProductPerSecond()));
  };

  if((engine.getCookieCounter() >= engine.getBakeryPrice()) && ($(this).attr('data-name') === 'bakery')) {
    engine.incCookieCounter(- engine.getBakeryPrice());
    cookieCounterToView = engine.getCookieCounter();
    amount.text(cookieCounterToView);

    engine.incBakeryPrice(1.1);
    ($(this).parent().prev('.cost')).text(shorten(engine.getBakeryPrice()));

    engine.incBakeryVol(1);
    $(displayAmount).find('div.popup span.amountOfMakers').text(engine.getBakeryVol());

    engine.incBakeryPPS(47)
    $(displayAmount).find('div.popup span.pps').text(engine.getBakeryPPS());

    engine.incProductPerSecond(47);
    productivityDisplay.text(shorten(engine.getProductPerSecond()));
  };

  if((engine.getCookieCounter() >= engine.getMinePrice()) && ($(this).attr('data-name') === 'mine')) {
    engine.incCookieCounter(- engine.getMinePrice());
    cookieCounterToView = engine.getCookieCounter();
    amount.text(cookieCounterToView);

    engine.incMinePrice(1.1);
    ($(this).parent().prev('.cost')).text(shorten(engine.getMinePrice()));

    engine.incMineVol(1);
    $(displayAmount).find('div.popup span.amountOfMakers').text(engine.getMineVol());

    var incrementPPS = (engine.getMinePPS(260));
    $(displayAmount).find('div.popup span.pps').text(engine.getMinePPS());

    engine.incProductPerSecond(260);
    productivityDisplay.text(shorten(engine.getProductPerSecond()));
  };
  // I used this loop before testing
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
