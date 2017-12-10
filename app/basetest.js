// var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
// console.log(cost);
// if (!indexedDB) {
//   alert("ERROR, PLEASE USE A NEWER BROWSER ");
// } else {
//   var open = indexedDB.open("scoreData");
//
//   open.onupgradeneeded = function() {
//     open.result.createObjectStore("MyObjectStore", {keyPath: "id"});
//   };
//
//   open.onsuccess = function() {
//       var db = open.result;
//       var tx = db.transaction("MyObjectStore", "readwrite");
//       var store = tx.objectStore("MyObjectStore");
//
//       store.put({
//         id: "counter", count: 0
//
//       });
//       store.put({
//
//
//       });
//
//       var getCounter = store.get("counter");
//
//       getCounter.onsuccess = function() {
//           console.log(getCounter.result.count);
//       };
//
//       tx.oncomplete = function() {
//           db.close();
//       };
//   }
// }
