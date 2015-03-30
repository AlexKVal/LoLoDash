var _ = require('lodash');

module.exports = function worker(list) {
  return _.sortByOrder(list, ['quantity'], [false])
};
