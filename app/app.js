$(function(){
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
    pointer: 5,
    grandma: 10,
    farm: 1000,
    bakery: 10000,
    mine: 100000
  }

  var volume = {
    pointer:0,
    grandma: 0,
    farm: 0,
    bakery: 0,
    mine: 0
  }

  var productivity = {
    grandma: 8,
    farm: 64,
    bakery: 256,
    mine: 512
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


  mainCookie.on('click', function(){
    cookieCounterToView++;
    cookieCounter++
    amount.text(shorten(cookieCounterToView));
  })

  setInterval(function(){
    amount.text(shorten(cookieCounterToView));

  },1000);

  // Function for button click:

  button.on('click', function(){

    if((cookieCounter >= cost.pointer) && ($(this).attr('data-name') === 'cursor')){
// SUBTRACT COST MAKER AND TRANSFER VALUE TO TWO SAME VALUE, BUT IT IS NECESERY TO RUN SHORTEN FUNCTION
      cookieCounter -= cost.pointer;
      cookieCounterToView = cookieCounter;
      amount.text(cookieCounterToView);
// DISPLAY & INCREASING POINTER COST

      cost.pointer = (cost.pointer * 1.3).toFixed(0);
      ($(this).parent().prev('.cost')).text(cost.pointer);
// DISPLAY & INCREASING POINTER AMOUNT

      volume.pointer++;
      $('.pointerAmount').text(volume.pointer);

// CLICK FUNCTION
      setInterval(function(){
        mainCookie.trigger('click');
      },10000)
    }


// GRANDMA

    else if((cookieCounter >= cost.grandma) && ($(this).attr('data-name') === 'grandma')){
      cookieCounter -= cost.grandma;
      cookieCounterToView = cookieCounter;
      amount.text(cookieCounterToView);

      cost.grandma = (cost.grandma * 1.3).toFixed(0);
      ($(this).parent().prev('.cost')).text(cost.grandma);

      volume.grandma++;
      $('.grandmaAmount').text(volume.grandma);

      productPerSecond += productivity.grandma;
      productivityDisplay.text(productPerSecond);

      setInterval(function(){
        cookieCounter += productivity.grandma ;
        cookieCounterToView = cookieCounter;

      },1000)

    }
// FARM
    else if((cookieCounter >= cost.farm) && ($(this).attr('data-name') === 'farm')){
      cookieCounter -= cost.farm;
      cookieCounterToView = cookieCounter;
      amount.text(cookieCounterToView);

      cost.farm = (cost.farm * 1.3).toFixed(0);
      ($(this).parent().prev('.cost')).text(cost.farm);

      volume.farm++;
      $('.farmAmount').text(volume.farm);

      productPerSecond += productivity.farm;
      productivityDisplay.text(productPerSecond);

      setInterval(function(){
        cookieCounter += productivity.farm ;
        cookieCounterToView = cookieCounter;

      },1000)

    }
// BAKERY
    else if((cookieCounter >= cost.bakery) && ($(this).attr('data-name') === 'bakery')){
      cookieCounter -= cost.bakery;
      cookieCounterToView = cookieCounter;
      amount.text(cookieCounterToView);

      cost.bakery = (cost.bakery * 1.3).toFixed(0);
      ($(this).parent().prev('.cost')).text(cost.bakery);

      volume.bakery++;
      $('.bakeryAmount').text(volume.bakery);

      productPerSecond += productivity.bakery;
      productivityDisplay.text(productPerSecond);

      setInterval(function(){
        cookieCounter += productivity.bakery ;
        cookieCounterToView = cookieCounter;

      },1000)

    }
    else if((cookieCounter >= cost.mine) && ($(this).attr('data-name') === 'mine')){
      cookieCounter -= cost.mine;
      cookieCounterToView = cookieCounter;
      amount.text(cookieCounterToView);

      cost.mine = (cost.mine * 1.3).toFixed(0);
      ($(this).parent().prev('.cost')).text(cost.mine);

      volume.mine++;
      $('.mineAmount').text(volume.mine);

      productPerSecond += productivity.mine;
      productivityDisplay.text(productPerSecond);

      setInterval(function(){
        cookieCounter += productivity.mine ;
        cookieCounterToView = cookieCounter;

      },1000)

    }

  })






})
