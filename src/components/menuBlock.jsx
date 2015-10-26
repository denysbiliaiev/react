import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

//require('../css/app.css');
//require('../css/main.scss');
//require('../css/main1.less');

import Main from './mainPage';
import Shop from './shopPage';
import Chat from './chatPage';
import Test from './testPage';

let Menu = React.createClass({
    render() {
        return (
            <div>
                <div className="nav">
                    <Link to="main">Main</Link>
                    <Link to="shop">Shop</Link>
                    <Link to="chat">Chat</Link>
                    <Link to="test">Test</Link>
                </div>
                <div className="container">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

let routes = (
    <Route name="main" path="/" handler={Main}>
        <Route name="shop" path="/shop" handler={Shop}/>
        <Route name="chat" path="/chat" handler={Chat}/>
        <Route name="test" path="/test" handler={Test}/>
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});

module.exports = Menu;