var merge = require('map-merge.s');

module.exports = function () {
  return merge(function (first, second, done) {
    done(null, [first, second]);
  });
};
