// Main set

var mainCookie = $('.cookie');
var button = $('.btn');
var amount = $('.amount');
amount.text(cookieCounterToView);

var productivityDisplay = $('.productivity') ;
var productPerSecond = 0;
var cookieCounter = 0;
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
  cursor: 0.1,
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
    return num;
  }
  if (num > 999) {
    return ((num/1000).toFixed(2) + 'k');

  }
  if(num > 999999) {
    return (num/1000000).toFixed(3) + 'mln';
  }
}

(function(){
  mainCookie.on('click', function(){
    cookieCounterToView++;
    cookieCounter++
    amount.text(shorten(cookieCounterToView));
  })
  // DISPLAY SCORE, SCORE PER SECOND FUNCTION

  setInterval(function(){
    cookieCounter += productPerSecond;
    cookieCounterToView = cookieCounter;
    amount.text(shorten(cookieCounterToView));
  },1000);

  // Function for button click:

  button.on('click', function(){
    var attribute = $(this).attr('data-name')

    if((cookieCounter >= cost.cursor) && ($(this).attr('data-name') === 'cursor')){
  // SUBTRACT COST MAKER AND TRANSFER VALUE TO TWO SAME VALUE, BUT IT IS NECESERY TO RUN SHORTEN FUNCTION
      cookieCounter -= cost.cursor;
      cookieCounterToView = cookieCounter;
      amount.text(cookieCounterToView);
  // DISPLAY & INCREASING POINTER COST

      cost.cursor = (cost.cursor * 1.1).toFixed(0);
      ($(this).parent().prev('.cost')).text(cost.cursor);
  // DISPLAY & INCREASING POINTER AMOUNT
      volume[attribute]++;
      var displayAmount =  $(this).parent().parent().children().first();
      $(displayAmount).find('div.popup span.amountOfMakers').text(volume[attribute]);
  // DISPLAY PRODUCE PER SECOND
      var displayAmount =  $(this).parent().parent().children().first();
      productivityPS[attribute] += productivity[attribute];
      $(displayAmount).find('div.popup span.pps').text(productivityPS[attribute]);
  // CLICK FUNCTION
      setInterval(function(){
        mainCookie.trigger('click');
      },10000)
    }


  // OTHER

    else if(cookieCounter >= cost[attribute]){

      cookieCounter -= cost[attribute];
      cookieCounterToView = cookieCounter;
      amount.text(cookieCounterToView);

      cost[attribute] = (cost[attribute] * 1.1 ).toFixed(0);
      ($(this).parent().prev('.cost')).text(shorten(cost[attribute]));

      volume[attribute]++;
      var displayAmount =  $(this).parent().parent().children().first();
      $(displayAmount).find('div.popup span.amountOfMakers').text(volume[attribute]);

      productivityPS[attribute] += productivity[attribute];
      $(displayAmount).find('div.popup span.pps').text(productivityPS[attribute]);

      productPerSecond += productivity[attribute];
      productivityDisplay.text(shorten(productPerSecond));

    }
  });
})();
