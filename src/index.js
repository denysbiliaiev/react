var $ = require('jquery');
require('./header.js');
require('./index.css');
var React = require('react');
var Toolbar = require('./toolbar');

$('body').prepend('<h1>Hello, Index</h1>');

React.render(
    React.createElement(Toolbar),
    document.getElementById('toolbar')
);

if (NODE_ENV === 'production') {
    $('body').append('NODE_ENV There is Production mode.');
} else {
    $('body').append('NODE_ENV There is Development mode.');
}