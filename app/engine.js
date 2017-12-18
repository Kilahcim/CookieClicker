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
    pps: 0,
  };

  var farm = {
    price : 1100,
    vol : 0,
    pps: 0,
  };

  var bakery = {
    price : 12000,
    vol : 0,
    pps: 0,
  };

  var mine = {
    price : 130000,
    vol : 0,
    pps: 0,
  };


  engine = {

    setCookieCounter: function(value) {
      cookieCounter = value;
    },

    getCookieCounter: function() {
      return cookieCounter;
    },

    incCookieCounter: function(value) {
      cookieCounter += value;
    },

    setProductPerSecond: function(value) {
      productPerSecond = value;
    },
    getProductPerSecond: function() {
      return productPerSecond;
    },
    incProductPerSecond: function(value) {
      productPerSecond += value;
    },


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

    incCursorPrice: function(value) {
      cursor.price *= value;
    },
    incCursorVol:  function(value) {
      cursor.vol += value;
    },

    tick: function () {
      time++;
      if (time % cursor.incrementPeriod === 0) {
        cookieCounter+=(cursor.vol);
      }
    },


    setGrandmaPrice: function(value) {
      grandma.price = value
    },

    setGrandmaVol: function(value) {
      grandma.vol = value;
    },
    setGrandmaPPS: function(value){
      grandma.pps = value;
    },

    getGrandmaPrice: function() {
      return Math.floor(grandma.price);
    },

    getGrandmaVol: function() {
      return grandma.vol;
    },

    getGrandmaPPS: function() {
      return grandma.pps;
    },

    incGrandmaPrice: function(value) {
      grandma.price *= value;
    },

    incGrandmaVol: function(value){
      grandma.vol += value;
    },
    incGrandmaPPS: function(value) {
      grandma.pps += value;
    },



    setFarmPrice: function(value) {
      farm.price = value
    },

    setFarmVol: function(value) {
      farm.vol = value;
    },

    setFarmPPS: function(value) {
      farm.pps = value;
    },

    getFarmPrice: function() {
      return farm.price;
    },

    getFarmVol: function() {
      return farm.vol;
    },

    getFarmPPS: function() {
      return farm.pps;
    },

    incFarmPrice: function(value) {
      farm.price *= value;
    },

    incFarmVol: function(value){
      farm.vol += value;
    },
    incFarmPPS: function(value) {
      farm.pps +=value;
    },

    setBakeryPrice: function(value) {
      bakery.price = value
    },

    setBakeryVol: function(value) {
      bakery.vol = value;
    },
    setBakeryPPS: function(value) {
      bakery.pps = value;
    },

    getBakeryPrice: function() {
      return bakery.price;
    },

    getBakeryVol: function() {
      return bakery.vol;
    },

    getBakeryPPS: function() {
      return bakery.pps;
    },

    incBakeryPrice: function(value) {
      bakery.price *= value;
    },

    incBakeryVol: function(value){
      bakery.vol += value;
    },
    incBakeryPPS: function(value) {
      bakery.pps += value
    },

    setMinePrice: function(value) {
      mine.price = value
    },

    setMineVol: function(value) {
      mine.vol = value;
    },

    setMinePPS: function(value) {
      mine.pps = value;
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

    incMinePPS: function(value) {
      mine.pps += value;
    },

    reset: function () {
     cookieCounter = 0;
     productPerSecond = 0;
     grandma.vol = 0;
     grandma.price = 0;
     grandma.pps = 0;

   }
  }

})();
