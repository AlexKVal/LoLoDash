var _ = require('lodash');

module.exports = function worker(usersTodos) {

  function daysDiff(date1, date2) {
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }

  function sortByDate(todos) {
    todos = _.map(todos, function (todoItem) {
      todoItem.date = new Date(todoItem.date)
      return todoItem
    })

    return _.sortBy(todos, 'date')
  }

  function isUrgent(date) {
    return (daysDiff(new Date(), date) <= 2)
  }

  var tmpl = '<ul>\n'+
    '<% _.forEach(usersTodos, function(todos, name){ %>'+
      '<% todos = sortByDate(todos) %>'+
      '<li><%= name %>\n'+
        '<ul>'+
        '<% _.forEach(todos, function(todoItem){ %>'+
          '<li>'+
          '<% if (isUrgent(todoItem.date)) { %><b>URGENT</b> <% } %>'+
          '<%= todoItem.todo %>'+
          '</li>\n'+
        '<% }); %>'+
        '</ul>\n'+
      '</li>\n'+
    '<% }); %>'+
    '</ul>'

  var compiled = _.template(tmpl, {imports: { 'isUrgent': isUrgent, 'sortByDate': sortByDate }})
  var html = compiled({usersTodos: usersTodos})
  // console.dir(html);
  return html
};
