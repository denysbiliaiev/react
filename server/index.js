require('node-jsx').install()

var express = require('express')
    , app = express()
    , React = require('react/addons')
    , components = require('./public/components.jsx')

var HelloMessage = React.createFactory(components.HelloMessage)

app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
    res.render('index', {
        react: React.renderToString(HelloMessage({name: "John"}))
    })
})

app.listen(3000, function() {
    console.log('Listening on port 3000...')
})