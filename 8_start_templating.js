var _ = require('lodash');

module.exports = function worker(data) {
  var tmpl = 'Hello <%= name %> (logins: <%= login.length %>)'
  return _.template(tmpl)(data)
};
