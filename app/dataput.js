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
        cookieAmount:  cookieCounter,
        cookieProductivity:  productPerSecond,
        amountOfMakers:  volume,
        costOfMakers:  cost,
      }
    });
    }


  window.location.href='index.html';
  });
}
