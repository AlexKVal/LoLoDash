var _ = require('lodash');

module.exports = function worker(list) {
  return _.where(list, { active: true })
};
