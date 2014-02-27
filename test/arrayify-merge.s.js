var expect = require('chai').expect;

var numbers = require('stream-spectrum/readable/number');

var arrayify  = require('../lib/arrayify-merge.s');

describe('arrayify-merge.s', function () {
  it('should arrayify', function (done) {
    var results = [];
    var merge = arrayify();
    merge.on('readable', function () {
      var item;
      while ((item = merge.read()) !== null) {
        results.push(item);
      }
    });
    merge.on('end', function () {
      expect(results).to.have.length(3);
      expect(results[0]).to.have.length(2);
      expect(results[1]).to.have.length(2);
      expect(results[2]).to.have.length(2);
      expect(results[0]).to.deep.equal([1, 4]);
      expect(results[1]).to.deep.equal([2, 5]);
      expect(results[2]).to.deep.equal([3, 6]);
      done();
    });
    var a = numbers({ from: 1, to: 3, objectMode: true });
    var b = numbers({ from: 4, to: 6, objectMode: true });
    a.pipe(merge);
    b.pipe(merge);
  });
});
