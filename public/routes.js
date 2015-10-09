"use strict";

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var App = require('./components/app');
var Home = require('./components/home');

var routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={Home}></DefaultRoute>
        <Route name="home" path="/home" handler={Home} />
        <NotFoundRoute handler={Home}></NotFoundRoute>
    </Route>
);

module.exports = routes;