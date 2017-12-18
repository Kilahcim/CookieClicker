var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

if (!indexedDB) {
  alert("ERROR, PLEASE USE A NEWER BROWSER ");
} else {
  document.querySelector('.save').addEventListener('click', function(){
  var open = indexedDB.open("MyDatabase", 1);
  open.onerror = function() {
    alert("SORRY WE CAN NOT SEND YOUR SCORE")
  }


  open.onupgradeneeded = function() {
      var db = open.result;
      var store = db.createObjectStore("MyObjectStore", {keyPath: "id"});
  };

  open.onsuccess = function() {
    var db = open.result;
    var tx = db.transaction("MyObjectStore", "readwrite");
    var store = tx.objectStore("MyObjectStore");

    store.put({
      id: 1,
      gameData: {
        cookieAmount:  engine.getCookieCounter(),
        cookieProductivity:  engine.getProductPerSecond(),

        amountOfMakers: {
          cursor: engine.getCursorVol(),
          grandma: engine.getGrandmaVol(),
          farm: engine.getFarmVol(),
          bakery: engine.getBakeryVol(),
          mine: engine.getMineVol()
        },
        costOfMakers:  {
          cursor: engine.getCursorPrice(),
          grandma: engine.getGrandmaPrice(),
          farm: engine.getFarmPrice(),
          bakery: engine.getBakeryPrice(),
          mine: engine.getMinePrice()
        },
        productivityEachMakers: {
          grandma: engine.getGrandmaPPS(),
          farm: engine.getFarmPPS(),
          bakery: engine.getBakeryPPS(),
          mine: engine.getMinePPS()
        },
      },
    });
  };

  window.location.href='index.html';
  });
}
