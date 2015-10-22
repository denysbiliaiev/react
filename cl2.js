var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'firefox',
        applicationCacheEnabled: false,
        //addCustomRequestHeaders: true,
    },
    //proxy: 'proxy.hostopia.com:3128',
};

var i = 0;
var r = 0;
var timeout = 40000;

function test1() {

    webdriverio
        .remote(options)
        .init()
        .windowHandleSize({width: 803, height: 680})
        .url('http://kaktusfresh.wix.com/lifedev')
        .pause(3000)
        .click('#comp-ifwowzublink')
        .pause(19000)
        .isExisting('div .image-container a img').then(function(isExisting) {
            if (isExisting) {
                r++
                this.click('div .image-container a img')
            }
        })
        .pause(25000)
        .title(function (err, res) {
            console.log('ERR: ' + err);
            console.log('RESULT: ' + res);
            console.log('count pokazov: ' + i);
            console.log('count reclama: ' + r);
        })
        .end()

        if (i < 500) {
            timeout -= 200;
        } else {
            timeout += 120;
        }
        console.log('timeout_1: ' + timeout);

        if (i < 900) {
            setTimeout(test1, timeout);
            i++
        }

}


function test2() {

    webdriverio
        .remote(options)
        .init()
        .url('http://merchteam1.wix.com/travel-world')
        .windowHandleSize({width: 801, height: 675})
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
        .pause(30000)
        .title(function (err, res) {
            console.log('ERR: ' + err);
            console.log('RESULT: ' + res);
            console.log('count pokazov: ' + i);
            console.log('count reclama: ' + r);
        })
        .end()

        if (i < 300) {
            timeout -= 100;
        } else {
            timeout += 130;
        }
        console.log('timeout_2: ' + timeout);

        if (i < 700) {
            setTimeout(test2, timeout);
            i++
    }
}

test1();
test2();
