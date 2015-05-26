(function (){
  var foco = {};

  foco.priorityQueue = function (handler, concurrency){
    var listQueuing = [];
    var listProcessing = [];
    function linearSearch(list, id){
      for(var i in listProcessing){
        if(listProcessing[i].id === id){
          return i;
        }
      }
      return -1;
    }
    function removeProcessing(id){
      var index = linearSearch(listProcessing, id);
      if(index != -1){
        listProcessing.splice(index, 1);
      }
    }
    function done(){
      removeProcessing(this.id);
      processTask();
    }
    function processTask(){
      //console.log('listQueuing.length ' + listQueuing.length);
      if(listQueuing.length === 0){
        //console.log('queue empty');
      } else if(listProcessing.length < concurrency){
        //console.log('task aval ' + listProcessing.length + ' ' + concurrency);
        var task = listQueuing.shift();
        listProcessing.push(task);
        setTimeout(function (){
          handler(task.id, task.data, done.bind(task));
        }, 0);
      } else {
        //console.log('task full ' + listProcessing.length + ' ' + concurrency);
      }
    }
    var queue = {
      push: function (id, priority, data){
        listQueuing.push({
          id: id,
          data: data
        });
        processTask();
      },
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
