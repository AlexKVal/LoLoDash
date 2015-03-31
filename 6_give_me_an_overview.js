var _ = require('lodash');

module.exports = function worker(orders) {

  var result = _.reduce(orders, function (acc, order) {
    acc[order.article] = (acc[order.article] || 0) + order.quantity
    return acc
  }, {})


  result = _.map(result, function (val, key) {
    return { article: parseInt(key), total_orders: val }
  })

  return _.sortBy(result, 'total_orders').reverse()
};
