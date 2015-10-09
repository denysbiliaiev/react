var React = require('react');
var Router = require('react-router');
var routes = require('routes');

Router.run(routes, Router.HistoryLocation, function(Handler, state) {
    React.render(<Handler />, document.getElementById('app'));
    //var activeRoute = RoutesAction.findActiveRoute(state.routes);
    //
    //// Every time there's a route change
    //// ask RoutesAction to manage the flow
    //RoutesAction.triggerRouteChange(activeRoute, state.params);
});

