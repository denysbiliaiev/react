import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import {Login} from './components/Login';
import ClientHandler from './components/Client';

let App = React.createClass({
    render() {
        return (
            <div className="nav">
                <Link to="app">Home</Link>
                <Link to="login">Login</Link>
                <Link to="client">Client</Link>
                {/* this is the importTant part */}
                <RouteHandler/>
            </div>
        );
    }
});

let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="login" path="/login" handler={Login}/>
        <Route name="client" path="/client" handler={ClientHandler}/>
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});
