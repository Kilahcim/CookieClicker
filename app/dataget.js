document.addEventListener("DOMContentLoaded", function(){

  var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;


  if (!indexedDB) {
    alert("ERROR, PLEASE USE A NEWER BROWSER ");
  } else {
    var open = indexedDB.open("MyDatabase", 1);

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
        cookieCounter = getDataGame.result.gameData.cookieAmount;
        document.querySelector('.amount').textContent= shorten(cookieCounter);
        productPerSecond = getDataGame.result.gameData.cookieProductivity;
        document.querySelector('.productivity').textContent = shorten(productPerSecond);
        //CURSOR
        document.querySelector('.cursor-price').textContent = getDataGame.result.gameData.costOfMakers.cursor;
        document.querySelector('.cursor-vol').textContent = getDataGame.result.gameData.amountOfMakers.cursor;
        // GRANDMA
        document.querySelector('.grandma-price').textContent = getDataGame.result.gameData.costOfMakers.grandma;
        document.querySelector('.grandma-vol').textContent = getDataGame.result.gameData.amountOfMakers.grandma;
        //FARM
        document.querySelector('.farm-price').textContent = shorten(getDataGame.result.gameData.costOfMakers.farm);
        document.querySelector('.farm-vol').textContent = getDataGame.result.gameData.amountOfMakers.farm;
        // BAKERY
        document.querySelector('.bakery-price').textContent = shorten(getDataGame.result.gameData.costOfMakers.bakery);
        document.querySelector('.bakery-vol').textContent = getDataGame.result.gameData.amountOfMakers.bakery;
        // MINE
        document.querySelector('.mine-price').textContent = shorten(getDataGame.result.gameData.costOfMakers.mine);
        document.querySelector('.mine-vol').textContent = getDataGame.result.gameData.amountOfMakers.mine;

      }
      tx.oncomplete = function() {
          db.close();
      };
    }
  }
})
