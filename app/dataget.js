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

        engine.setCookieCounter(getDataGame.result.gameData.cookieAmount);
        document.querySelector('.amount').textContent= shorten(engine.getCookieCounter());

        engine.setProductPerSecond(getDataGame.result.gameData.cookieProductivity);
        document.querySelector('.productivity').textContent = shorten(engine.getProductPerSecond());

        engine.setCursorPrice(getDataGame.result.gameData.costOfMakers.cursor);
        document.querySelector(".cursor-price").textContent = shorten(engine.getCursorPrice());

        engine.setCursorVol(getDataGame.result.gameData.amountOfMakers.cursor);
        document.querySelector(".cursor-vol").textContent = shorten(engine.getCursorVol());

        engine.setGrandmaPrice(getDataGame.result.gameData.costOfMakers.grandma);
        document.querySelector(".grandma-price").textContent = shorten(engine.getGrandmaPrice());

        engine.setGrandmaVol(getDataGame.result.gameData.amountOfMakers.grandma);
        document.querySelector(".grandma-vol").textContent = shorten(engine.getGrandmaVol());

        engine.setGrandmaPPS(getDataGame.result.gameData.productivityEachMakers.grandma);
        document.querySelector(".grandma-pps").textContent = shorten(engine.getGrandmaPPS());

        engine.setFarmPrice(getDataGame.result.gameData.costOfMakers.farm);
        document.querySelector(".farm-price").textContent = shorten(engine.getFarmPrice());

        engine.setFarmVol(getDataGame.result.gameData.amountOfMakers.farm);
        document.querySelector(".farm-vol").textContent = shorten(engine.getFarmVol());

        engine.setFarmPPS(getDataGame.result.gameData.productivityEachMakers.farm);
        document.querySelector(".farm-pps").textContent = shorten(engine.getFarmPPS());


        engine.setBakeryPrice(getDataGame.result.gameData.costOfMakers.bakery);
        document.querySelector(".bakery-price").textContent = shorten(engine.getBakeryPrice());

        engine.setBakeryVol(getDataGame.result.gameData.amountOfMakers.bakery);
        document.querySelector(".bakery-vol").textContent = shorten(engine.getBakeryVol());

        engine.setBakeryPPS(getDataGame.result.gameData.productivityEachMakers.bakery);
        document.querySelector(".bakery-pps").textContent = shorten(engine.getBakeryPPS());



        engine.setMinePrice(getDataGame.result.gameData.costOfMakers.mine);
        document.querySelector(".mine-price").textContent = shorten(engine.getMinePrice());

        engine.setMineVol(getDataGame.result.gameData.amountOfMakers.mine);
        document.querySelector(".mine-vol").textContent = shorten(engine.getMineVol());

        engine.setMinePPS(getDataGame.result.gameData.productivityEachMakers.mine);
        document.querySelector(".mine-pps").textContent = shorten(engine.getMinePPS());

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
