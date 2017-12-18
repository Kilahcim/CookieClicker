document.addEventListener("DOMContentLoaded", function(){

  var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;


  if (!indexedDB) {
    alert("ERROR, PLEASE USE A NEWER BROWSER ");
  } else {
    var open = indexedDB.open("MyDatabase", 1);

    open.onerror = function() {
      alert("SORRY WE CAN NOT DOWNLOAD YOUR SCORE")
    }

    open.onupgradeneeded = function() {
        var db = open.result;
        var store = db.createObjectStore("MyObjectStore", {keyPath: "id"});
    };

    open.onsuccess = function() {
      var db = open.result;
      var tx = db.transaction("MyObjectStore", "readwrite");
      var store = tx.objectStore("MyObjectStore");

      var getDataGame = store.get(1);




      getDataGame.onsuccess = function(){

        if(!getDataGame.result) {
          console.log("I have no previous record");
          return
        }
        
      // MAIN SCORE
        engine.setCookieCounter(getDataGame.result.gameData.cookieAmount);
        document.querySelector('.amount').textContent= shorten(engine.getCookieCounter());

      // COLLECTIVE PERFORMANCE
        engine.setProductPerSecond(getDataGame.result.gameData.cookieProductivity);
        document.querySelector('.productivity').textContent = shorten(engine.getProductPerSecond());
        //CURSOR PRICE
        engine.setCursorPrice(getDataGame.result.gameData.costOfMakers.cursor);
        document.querySelector(".cursor-price").textContent = engine.getCursorPrice();
        // CURSOR AMOUNT
        engine.setCursorVol(getDataGame.result.gameData.amountOfMakers.cursor);
        document.querySelector(".cursor-vol").textContent = engine.getCursorVol();

        // GRANDMA PRICE
        engine.setGrandmaPrice(getDataGame.result.gameData.costOfMakers.grandma);
        document.querySelector(".grandma-price").textContent = engine.getGrandmaPrice();
        // GRANDMA VOL
        engine.setGrandmaVol(getDataGame.result.gameData.amountOfMakers.grandma);
        document.querySelector(".grandma-vol").textContent = engine.getGrandmaVol();
        // GRANDMA PPS
        document.querySelector(".grandma-pps").textContent = engine.getGrandmaPPS();

        // FARM PRICE
        engine.setFarmPrice(getDataGame.result.gameData.costOfMakers.farm);
        document.querySelector(".farm-price").textContent = engine.getFarmPrice();
        // FARM VOL
        engine.setFarmVol(getDataGame.result.gameData.amountOfMakers.farm);
        document.querySelector(".farm-vol").textContent = engine.getFarmVol();
        // FARM PPS
        document.querySelector(".farm-pps").textContent = engine.getFarmPPS();

        // BAKERY PRICE
        engine.setBakeryPrice(getDataGame.result.gameData.costOfMakers.bakery);
        document.querySelector(".bakery-price").textContent = engine.getBakeryPrice();
        // BAKERY VOL
        engine.setBakeryVol(getDataGame.result.gameData.amountOfMakers.bakery);
        document.querySelector(".bakery-vol").textContent = engine.getBakeryVol();
        // BAKERY PPS
        document.querySelector(".bakery-pps").textContent = engine.getBakeryPPS();


        // MINE PRICE
        engine.setMinePrice(getDataGame.result.gameData.costOfMakers.mine);
        document.querySelector(".mine-price").textContent = engine.getMinePrice();
        // MINE VOL
        engine.setMineVol(getDataGame.result.gameData.amountOfMakers.mine);
        document.querySelector(".mine-vol").textContent = engine.getMineVol();
        // MINE PPS
        document.querySelector(".mine-pps").textContent = engine.getMinePPS();

        // THIS LOOP I DID BEFORE TESTING APP
        // for (var i = 0; i < namesArr.length; i++) {
        //   document.querySelector('.'+get[namesArr[i]]+'-price').textContent =  getDataGame.result.gameData.costOfMakers[namesArr[i]];
        //   document.querySelector('.'+[namesArr[i]]+'-vol').textContent = getDataGame.result.gameData.amountOfMakers[namesArr[i]];



      }
      tx.oncomplete = function() {
          db.close();
      };
    }
  }
})
