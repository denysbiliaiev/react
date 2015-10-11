var $ = require('jquery');
// загружаем данные из JSON-файла в объект:
var customer = require('./customer.json');
// загружаем и компилируем шаблон:
var Header = require('./header.hbs');
require('./header.css');
// отдаём данные в шаблон и выводим полученный HTML
$('body').prepend(Header(customer));