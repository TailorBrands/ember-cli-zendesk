'use strict';

module.exports = {
  name: require('./package').name,

  contentFor: function (type, config) {
    if (type === 'head' && config.zendesk && config.zendesk.key) {
      const srcPath = "https://static.zdassets.com/ekr/snippet.js?key=" + config.zendesk.key;
      return `<script id="ze-snippet" src=${srcPath}></script>`;
    }
  },
};
