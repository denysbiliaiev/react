var stripComments = require('strip-json-comments');

module.exports = function(source) {
    this.cacheable();
    return stripComments(source);
}