var $ = require('jquery');
// ��������� ������ �� JSON-����� � ������:
var customer = require('./customer.json');
// ��������� � ����������� ������:
var Header = require('./header.hbs');
require('./header.css');
// ����� ������ � ������ � ������� ���������� HTML
$('body').prepend(Header(customer));