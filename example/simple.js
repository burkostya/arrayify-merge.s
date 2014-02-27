var arrayify = require('../lib/arrayify-merge.s');
var numbers = require('stream-spectrum/readable/number');
var inspect = require('inspect-stream');

var merge = arrayify();

numbers({ from: 1, to: 4, objectMode: true }).pipe(merge);
numbers({ from: 5, to: 9, objectMode: true }).pipe(merge);
merge.pipe(inspect());

