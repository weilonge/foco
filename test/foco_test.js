var sinon = require('sinon');

describe('foco', function() {
  var foco = require('../lib/foco.js');
  describe('when using priorityQueue', function() {
    it('should create a priority queue', function (done){
      var pq = foco.priorityQueue();
      done();
    });
  });
});
