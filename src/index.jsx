//var $ = require('jquery');
//require('./header.js');
//require('./index.css');
var React = require('react');
var Router = require("react-router");
var routes = require('./routes.jsx');

Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler />, document.getElementById('app'));
});

//$('body').prepend('<h1>Hello, Index</h1>');
//
//React.render(
//    React.createElement(App),
//    document.getElementById('app')
//);
//
//if (NODE_ENV === 'production') {
//    $('body').append('NODE_ENV There is Production mode.');
//} else {
//    $('body').append('NODE_ENV There is Development mode.');
//}