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
        .url('http://kaktusfresh.wix.com/lifedev')
        .pause(2000)
        .click('#comp-ifyevskjlabel')
        .pause(120000)
        .title(function (err, res) {
            console.log('Title was: ' + res);
        })
        .end()
        .pause(5000);
//    setTimeout(YouTube, 5000);
}

setInterval(YouTube, 5000);
