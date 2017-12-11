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
    cursor: 5,
    grandma: 10,
    farm: 1000,
    bakery: 10000,
    mine: 100000
  }

  var volume = {
    cursor: 0,
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
    var attribute = $(this).attr('data-name')

    if((cookieCounter >= cost.cursor) && ($(this).attr('data-name') === 'cursor')){
// SUBTRACT COST MAKER AND TRANSFER VALUE TO TWO SAME VALUE, BUT IT IS NECESERY TO RUN SHORTEN FUNCTION
      cookieCounter -= cost.cursor;
      cookieCounterToView = cookieCounter;
      amount.text(cookieCounterToView);
// DISPLAY & INCREASING POINTER COST

      cost.cursor = (cost.cursor * 1.05).toFixed(0);
      ($(this).parent().prev('.cost')).text(cost.cursor);
// DISPLAY & INCREASING POINTER AMOUNT
console.log(volume[attribute]);
      volume[attribute]++;
      var displayAmount =  $(this).parent().parent().children().first();
      $(displayAmount).find('div.popup span.amountOfMakers').text(volume[attribute]);
// CLICK FUNCTION
      setInterval(function(){
        mainCookie.trigger('click');
      },10000)
    }


// GRANDMA

    else if(cookieCounter >= cost[attribute]){

      cookieCounter -= cost[attribute];
      cookieCounterToView = cookieCounter;
      amount.text(cookieCounterToView);

      cost[attribute] = (cost[attribute] * 1.3).toFixed(0);
      ($(this).parent().prev('.cost')).text(cost[attribute]);

      volume[attribute]++;
      var displayAmount =  $(this).parent().parent().children().first();
      $(displayAmount).find('div.popup span.amountOfMakers').text(volume[attribute]);

      productPerSecond += productivity[attribute];
      productivityDisplay.text(productPerSecond);

      setInterval(function(){
        cookieCounter += productivity[attribute] ;
        cookieCounterToView = cookieCounter;

      },1000)

    }
  })

  var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

  console.log(cost);

  if (!indexedDB) {
    alert("ERROR, PLEASE USE A NEWER BROWSER ");
  } else {
    var open = indexedDB.open("scoreData");

    open.onupgradeneeded = function() {
      open.result.createObjectStore("MyObjectStore", {keyPath: "id"});
      console.log("trololo");
    };

    open.onsuccess = function() {
        var db = open.result;
        var tx = db.transaction("MyObjectStore", "readwrite");
        var store = tx.objectStore("MyObjectStore");

        store.put({
          id: "COST", value: cost
        });
        store.put({
          id: "VOL", value: volume
        });
        store.put({
          id: "PRODUCTIVITY", value: productivity
        })


        var getCost = store.get("COST");
        var getVolume = store.get("VOL");
        var getProductivity = store.get("PRODUCTIVITY")

        getCost.onsuccess = function() {
            console.log(getCost.result.value);
        };

        getVolume.onsuccess = function() {
          console.log(getVolume.result.value);
        };
        getProductivity.onsuccess = function() {
          console.log(getProductivity.result.value)
        }
        getCost.onerror = function() {
          alert("Request doesnt work. Wait I'am traing again");
          store.put({
            id: "COST", value: cost
          });
        };

        getVolume.onerror = function() {
          alert("Request doesnt work. Wait I'am traing again");
          store.put({
            id: "VOL", value: volume
          });
        };
        getProductivity.onerror = function() {
          alert("Request doesnt work. Wait I'am traing again");
          store.put({
            id: "PRODUCTIVITY", value: productivity
          })
        }






        tx.oncomplete = function() {
            db.close();
        };
    }
  }







})
