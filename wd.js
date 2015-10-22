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

    profile.setPreference("general.useragent.override", "User Agent string to force application/vnd.wap.xhtml+xml content..");

    profile.setPreference("general.headers.X-Forwarded-For", "1.2.3.4");

    profile.setPreference("modifyheaders.headers.count", 1);
    profile.setPreference("modifyheaders.headers.action0", "Add");
    profile.setPreference("modifyheaders.headers.name0", "X-Forwarded-For");
    profile.setPreference("modifyheaders.headers.value0", "1.2.3.4");
    profile.setPreference("modifyheaders.headers.enabled0", true);
    profile.setPreference("modifyheaders.config.active", true);
    profile.setPreference("modifyheaders.config.alwaysOn", true);

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

        driver.get('http://www.seogadget.ru/myip');
        //driver.findElement(By.name('q')).sendKeys('webdriver');
        //driver.findElement(By.name('btnG')).click();
        driver.wait(until.titleIs('webdriver - Google Search'), 100000);
        driver.quit();
    });
});




