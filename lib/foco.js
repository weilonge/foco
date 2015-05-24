(function (){
  var foco = {};

  foco.priorityQueue = function (handler, concurrency){
    var queue = {
      push: function (id, priority, data){},
      priorityChange: function (id, priority){}
    };
    return queue;
  };

  if (typeof module !== 'undefined' && module.exports) { // Node.js support
    module.exports = foco;
  } else { // browser support
    root.foco = foco;
  }
})();
