var _ = require('lodash');

module.exports = function worker(list) {
  var result = {}

  list = _.sortBy(list, 'income')

  var incomes = _.pluck(list, 'income')
  result.average = _.reduce(incomes, function(acc, i){return acc + i}, 0) / incomes.length

  result.underperform = _.filter(list, function (freelancer) {
    return freelancer.income <= result.average
  })

  result.overperform = _.filter(list, function (freelancer) {
    return freelancer.income > result.average
  })

  return result
};
