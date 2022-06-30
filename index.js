'use strict';

module.exports = {
  name: require('./package').name,

  contentFor: function (type, config) {
    if (type === 'head' && config.zendesk && config.zendesk.key) {
      const script = '<script id="ze-snippet"></script>';
      document.getElementById("ze-snippet").src = "https://static.zdassets.com/ekr/snippet.js?key=" + config.zendesk.key;
      return script;
    }
  },
};
