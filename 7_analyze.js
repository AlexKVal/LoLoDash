var _ = require('lodash');

module.exports = function worker(list) {
  var res = {}

  list = _.sortBy(list, 'income')

  res.average = _.reduce(list, function(acc, i){return acc + i.income}, 0) / list.length

  res.underperform = _.filter(list, function (freelancer) {
    return freelancer.income <= res.average
  })

  res.overperform = _.filter(list, function (freelancer) {
    return freelancer.income > res.average
  })

  return res
};
