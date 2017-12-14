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

      var namesArr = ['cursor', 'grandma', 'farm', 'bakery', 'mine'];

      getDataGame.onsuccess = function(){
        cookieCounter = getDataGame.result.gameData.cookieAmount;
        document.querySelector('.amount').textContent= shorten(cookieCounter);
        productPerSecond = getDataGame.result.gameData.cookieProductivity;
        document.querySelector('.productivity').textContent = shorten(productPerSecond);
        //CURSOR
        for (var i = 0; i < namesArr.length; i++) {
          document.querySelector('.'+[namesArr[i]]+'-price').textContent = getDataGame.result.gameData.costOfMakers[namesArr[i]];
          document.querySelector('.'+[namesArr[i]]+'-vol').textContent = getDataGame.result.gameData.amountOfMakers[namesArr[i]];
          document.querySelector('.'+[namesArr[i]]+'-pps').textContent = getDataGame.result.gameData.cookieProductivityPS[namesArr[i]];
        }
      }
      tx.oncomplete = function() {
          db.close();
      };
    }
  }
})
