var _ = require('lodash');

module.exports = function worker(hashtable) {
  return _.forEach(hashtable, function (city) {
    switch (true) {
      case (city.population > 1):
        city.size = 'big'
        break;
      case (city.population < 0.5):
        city.size = 'small'
        break;
      default:
        city.size = 'med'
    }
  })
};
