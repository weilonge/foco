var foco = require('../lib/foco');

var pq = foco.each(['Hello', 'World', '!', 'foco'],
  function (index, item, callback){
    console.log(item);
    callback();
  },
  function (){
    console.log('FINISHED!!!');
  });
