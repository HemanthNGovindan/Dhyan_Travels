var express = require('express')
var app = express()
var bodyparser = require('body-parser');
var cors = require('cors');
var business = require('./business');
var Promise = require('promise');
// var req = res = {};
var allowedOrigins = ['http://www.nupinmathew.online'];
var corsOptions = {
    origin: function (origin, callback) {
        var originIsWhitelisted = allowedOrigins.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};

app.use(cors(corsOptions));

app.use(bodyparser.urlencoded({
    extended: false
}));

app.post('/', function (req, res) {
    console.log(req.body);
    res.send('Empty Route');
})
app.get('/', function (req, res) {
    res.send('Empty Route')
})


app.get('/ReadApplicationContentFile', function (req, res) { business.readApplicationContentFileCallback(req, res) });
app.post('/NotifyCustomer', function (req, res) { business.notifyCustomerCallback(req, res) });

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})
