var sinon = require('sinon');

describe('foco', function() {
  var foco = require('../lib/foco.js');
  describe('when using priorityQueue', function() {
    it('should create a priority queue', function (done){
      var count = 0;
      var TASK_NUM = 5;
      var pq = foco.priorityQueue(function (id, data, finished){
        finished();
        if (++count === (TASK_NUM -1)) {
          done();
        }
      }, 1);
      for (var i = 1; i < TASK_NUM; i++) {
        pq.push(i, i*100, i*1000);
      }
    });
  });
});
