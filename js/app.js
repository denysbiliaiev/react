import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import {Login} from './components/Login';
import ClientHandler from './components/Client';

require('../css/app.css');
require('../css/main.scss');
require('../css/main1.less');

var img = document.createElement('img');

img.style.width = '25%';
img.style.height = '25%';
img.src = require('../images/react.png');

document.getElementById('simg').appendChild(img);

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
