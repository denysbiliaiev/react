import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import {Login} from './components/Login';
import ClientHandler from './components/Client';

require('../css/app.css');
require('../css/main.scss');
require('../css/main1.less');

let App = React.createClass({
    render() {
        return (
            <div>
                <div className="nav">
                    <Link to="app">Home</Link>
                    <Link to="login">Login</Link>
                    <Link to="client">Client</Link>
                </div>
                <div className="container">
                    <img src={'../images/react.png'}></img>
                    <RouteHandler/>
                </div>
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
