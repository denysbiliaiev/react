var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var chrome = require('selenium-webdriver/chrome');
var firefox = require('selenium-webdriver/firefox');
var FirefoxProfile = require('firefox-profile');
var path = require('path');
var fs = require("fs")

var profile = new FirefoxProfile();

profile.addExtension(path.resolve(__dirname, 'extensions/modify_headers.xpi'), function() {

    var capabilities = webdriver.Capabilities.firefox();


    profile.setNativeEventsEnabled(false);

    profile.setPreference("general.useragent.override", "some UA string");

    profile.setPreference("modifyheaders.config.active", true);
    profile.setPreference("modifyheaders.config.alwaysOn", true);
    profile.setPreference("modifyheaders.headers.count", 2);
    profile.setPreference("modifyheaders.headers.action0", "Add");
    profile.setPreference("modifyheaders.headers.name0", "X-Forwarded-For");
    profile.setPreference("modifyheaders.headers.value0", "1.2.3.4");
    profile.setPreference("modifyheaders.headers.enabled0", true);
    profile.setPreference("modifyheaders.headers.action1", "Add");
    profile.setPreference("modifyheaders.headers.name1", "X-Forwarded-For");
    profile.setPreference("modifyheaders.headers.value1", "1.2.3.5");
    profile.setPreference("modifyheaders.headers.enabled1", true);

    //profile.setProxy({
    //    proxyType: 'manual',
    //    httpProxy: 'geeksforless.net:3128'
    //});

    profile.encoded(function(encodedProfile) {
        capabilities.set('firefox_profile', encodedProfile);

        var driver = new webdriver.Builder().
            withCapabilities(capabilities)
            //.forBrowser('firefox')
            //.setChromeOptions(/* ... */)
            //.setFirefoxOptions(/* ... */)
            .build();

        //???????? IP ??????? ??????????: 193.46.86.0 - 193.46.86.255

        //driver.get('http://www.seogadget.ru/myip');
        driver.get('http://rassanov.ru/web-tools/my-IP.htm');


        //driver.findElement(By.name('q')).sendKeys('webdriver');
        //driver.findElement(By.name('btnG')).click();
        driver.wait(until.titleIs('webdriver - Google Search'), 30000);
        driver.quit();
    });
});




