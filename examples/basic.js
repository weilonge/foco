var foco = require('../lib/foco');

var test = {};
test.greetings = 'Hello!';
test.handler = function (id, data, done){
  var that = this;
  console.log('task ' + id + ' processing...');
  setTimeout(function (){
    console.log('task ' + id + ' : ' + data);
    console.log(that.greetings + ', ' + data);
    done();
  }, 1500);
};

var pq = foco.priorityQueue(test.handler.bind(test), 4);

for (var i = 1; i < 20; i++) {
  pq.push(i, i, i*1000);
}

pq.priorityChange(19, 9);
pq.priorityChange(18, 8);
pq.priorityChange(17, 7);
pq.priorityChange(16, 6);
