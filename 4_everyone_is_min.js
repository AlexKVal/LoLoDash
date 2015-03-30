var _ = require('lodash');

module.exports = function worker(cities) {
  var res = {
    hot: [],
    warm: []
  }

  function check_tmp(t) {
    return t > 19
  }

  _.forEach(cities, function (temps, name) {
    if (_.every(temps, check_tmp)) {
      res.hot.push(name)
    } else if (_.some(temps, check_tmp)) {
      res.warm.push(name)
    }
  })

  return res
};
