var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

if (!indexedDB) {
  alert("ERROR, PLEASE USE A NEWER BROWSER ");
} else {
  var open = indexedDB.open("scoreData");

  open.onsuccess = function() {
      var db = open.result;
      var tx = db.transaction("MyObjectStore", "readwrite");
      var store = tx.objectStore("MyObjectStore");

      store.put({
        id: "counter", count: 0
      });

      var getCounter = store.get("counter");

      getCounter.onsuccess = function() {
          console.log(getCounter.result.count);
      };

      tx.oncomplete = function() {
          db.close();
      };
  }
}
