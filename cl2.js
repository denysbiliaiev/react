var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    },
    //proxy: 'proxy.hostopia.com:3128',
};

var i = 0;
var r = 0;

function test1() {
    webdriverio
        .remote(options)
        .init()
        .url('http://kaktusfresh.wix.com/lifedev')
        .pause(3000)
        this.click('#comp-ifwowzublink')
        .pause(19000)
        .isExisting('div .image-container a img').then(function(isExisting) {
            if (isExisting) {
                r++
                this.click('div .image-container a img')
            }
        })
        .pause(100000)
        .title(function (err, res) {
            console.log('ERR: ' + err);
            console.log('RESULT: ' + res);
            console.log('count pokazov: ' + i);
            console.log('count reclama: ' + r);
        })
        .end()

        i++
        setTimeout(test1, 50000);
}


function test2() {
    webdriverio
        .remote(options)
        .init()
        .url('http://merchteam1.wix.com/travel-world')
        .pause(5000)
        .click('#DrpDwnMn02bg')
        .pause(7000)
        .click('#comp-ifyevskjlabel')
        .pause(19000)
        .isExisting('div .image-container a img').then(function(isExisting) {
            if (isExisting) {
                r++
                this.click('div .image-container a img')
            }
        })
        .pause(100000)
        .title(function (err, res) {
            console.log('ERR: ' + err);
            console.log('RESULT: ' + res);
            console.log('count pokazov: ' + i);
            console.log('count reclama: ' + r);
        })
        .end()

         i++
         setTimeout(test2, 50000);
}

test1();
test2();
