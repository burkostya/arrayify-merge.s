var factory = require('arrayify\-merge.s');
var numbers = require('stream-spectrum/readable/number');
var inspect = require('inspect-stream');

var stream = factory();

numbers({ from: 1, to: 9 })
  .pipe(stream)
  .pipe(inspect());

