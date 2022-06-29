'use strict';

module.exports = {
  name: require('./package').name,

  contentFor: function (type, config) {
    if (type === 'head' && config.zendesk && config.zendesk.key) {
      return '<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key={{key}}"></script><script>';
    }
  },
};
