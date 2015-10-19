var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    },
    //proxy: 'proxy.hostopia.com:3128',
};

for (var i=1; i <10; i++) {
    webdriverio
        .remote(options)
        .init()
        .url('http://kaktusfresh.wix.com/lifedev')
        .pause(2000)
        .click('#comp-ifwowzublink')
        .pause(240000)
        .title(function (err, res) {
            console.log('Title was: ' + res);
        })
        .end();
}