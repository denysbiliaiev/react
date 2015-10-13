var express = require('express');
var app = express();

//app.use('/', express.static(__dirname + '/public'));
//app.use('/build', express.static(__dirname + '/build'));

app.set('views', './views');
app.set('view engine', 'jade');

import routes from "../shared/routes";

app.get('/*', function (req, res) {
    Router.run(routes, req.url, Handler => {
        let content = React.renderToString(<Handler />);
        res.render('index', { content: content });
    });
});



var server = app.listen(3000, function() {
    console.log("server 3000");
});


