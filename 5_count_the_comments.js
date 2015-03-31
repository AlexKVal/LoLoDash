var _ = require('lodash');

module.exports = function commentsCounter(comments) {

  var groupedByName = _.groupBy(comments, 'username')

  var result = _.map(groupedByName, function (el, indx) {
    return { username: el[0].username, comment_count: _.size(el)}
  })

  result = _.sortBy(result, 'comment_count').reverse()

  return result
};
