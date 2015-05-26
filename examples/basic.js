var foco = require('../lib/foco');

var pq = foco.priorityQueue(function (id, data, done){
  console.log('task ' + id + ' processing...');
  setTimeout(function (){
    console.log('task ' + id + ' : ' + data);
    done();
  }, 1500);
}, 4);

for (var i = 1; i < 20; i++) {
  pq.push(i, i*100, i*1000);
}
