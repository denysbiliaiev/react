var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var App = require("./app");
var Test = require("./test");

var routes = (
    <Route handler={ App } path="/">
        <Route name="test" handler={ Test } path="/test"></Route>
    </Route>
);

module.exports = routes;

