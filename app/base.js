// SCORE TO BASE

var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
if (!indexedDB) {
  alert("ERROR, PLEASE USE A NEWER BROWSER ");
} else {
  var save = document.querySelector('.save');
  save.addEventListener('click', function(){
  var open = indexedDB.open("scoreData");

    open.onupgradeneeded = function() {
      open.result.createObjectStore("MyObjectStore", {keyPath: "id"});
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
          id: "PRODUCTIVITY", value: productPerSecond
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
            id: "PRODUCTIVITY", value: productPerSecond
          })
        }






        tx.oncomplete = function() {
            db.close();
        };

    }
    
  })
}
