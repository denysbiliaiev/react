var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var routes = (
    <Route name="main" path="/" handler={Menu}>
        <Route name="shop" path="/shop" handler={Shop}/>
        <Route name="chat" path="/chat" handler={Chat}/>
        <Route name="test" path="/test" handler={Test}/>
    </Route>
);

module.exports = routes;