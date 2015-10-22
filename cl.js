var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    },
    //proxy: 'proxy.hostopia.com:3128',
};


function YouTube() {
    webdriverio
        .remote(options)
        .init()
        .url('https://2ip.ru/')
        .pause(2000)
        .title(function (err, res) {
            console.log(res);
        })
        .end()
}

YouTube();
