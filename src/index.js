var $ = require('jquery');
require('./header.js');

require('./index.css');
$('body').prepend('<h1>Hello, Index</h1>');
if (NODE_ENV === 'production') {
    $('body').append('NODE_ENV There is Production mode.');
} else {
    $('body').append('NODE_ENV There is Development mode.');
}