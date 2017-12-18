var engine;
(function(){

  var cookieCounter = 0;
  var productPerSecond = 0;
  var time = 0;

  var cursor = {
    price : 15,
    vol : 0,
    incrementPeriod : 10,
  };

  var grandma = {
    price : 100,
    vol : 0,
    pps: 1,
  };

  var farm = {
    price : 1100,
    vol : 0,
    pps: 8,
  };

  var bakery = {
    price : 12000,
    vol : 0,
    pps: 47,
  };

  var mine = {
    price : 130000,
    vol : 0,
    pps: 260,
  };


  engine = {
// CookiesCounter

    setCookieCounter: function(value) {
      cookieCounter = value;
    },

    getCookieCounter: function() {
      return cookieCounter;
    },

    incCookieCounter: function(value) {
      cookieCounter += value;
    },
    // check you have enough

// PRODUCT PER SECOND

    setProductPerSecond: function(value) {
      productPerSecond = value;
    },
    getProductPerSecond: function() {
      return productPerSecond;
    },
    incProductPerSecond: function(value) {
      productPerSecond += value;
    },

// CURSOR
    setCursorPrice: function(value) {
      cursor.price = value;
    },

    setCursorVol: function(value) {
      cursor.vol = value;
    },


    getCursorVol: function() {
      return cursor.vol;
    },

    getCursorPrice: function(){
      return cursor.price;
    },

    buyCursor: function() {
      if(cookieCounter >= cursor.price ) {
        cursor.vol++;
        cookieCounter -= cursor.price;
        cursor.price * 1.1;
      }
    },

    tick: function () {
      time++;
      if (time % cursor.incrementPeriod === 0) {
        cookieCounter+=(cursor.vol);
      }
    },
//  GRANDMA

    setGrandmaPrice: function(value) {
      grandma.price = value
    },

    setGrandmaVol: function(value) {
      grandma.vol = value;
    },

    getGrandmaPrice: function() {
      return Math.floor(grandma.price);
    },

    getGrandmaVol: function() {
      return grandma.vol;
    },

    getGrandmaPPS: function() {
      return grandma.pps * grandma.vol;
    },

    incGrandmaPrice: function(value) {
      grandma.price *= value;
    },

    incGrandmaVol: function(value){
      grandma.vol += value;
    },


// FARM
    setFarmPrice: function(value) {
      farm.price = value
    },

    setFarmVol: function(value) {
      farm.vol = value;
    },

    getFarmPrice: function() {
      return farm.price;
    },

    getFarmVol: function() {
      return farm.vol;
    },

    getFarmPPS: function() {
      return farm.pps * farm.vol;
    },

    incFarmPrice: function(value) {
      farm.price *= value;
    },

    incFarmVol: function(value){
      farm.vol += value;
    },
// BAKERY
    setBakeryPrice: function(value) {
      bakery.price = value
    },

    setBakeryVol: function(value) {
      bakery.vol = value;
    },

    getBakeryPrice: function() {
      return bakery.price;
    },

    getBakeryVol: function() {
      return bakery.vol;
    },

    getBakeryPPS: function() {
      return bakery.pps * bakery.vol;
    },

    incBakeryPrice: function(value) {
      bakery.price *= value;
    },

    incFarmPrice: function(value) {
      farm.price *= value;
    },

    incBakeryVol: function(value){
      bakery.vol += value;
    },
// MINE
    setMinePrice: function(value) {
      mine.price = value
    },

    setMineVol: function(value) {
      mine.vol = value;
    },

    getMinePrice: function() {
      return mine.price;
    },

    getMineVol: function() {
      return mine.vol;
    },

    getMinePPS: function() {
      return mine.pps * mine.vol;
    },

    incMinePrice: function(value) {
      mine.price *= value;
    },
    incMineVol: function(value){
      mine.vol += value;
    },
    reset: function () {
     cookieCounter = 0;
     productPerSecond = 0;
     cursor.vol = 0;
   }
  }

})();
