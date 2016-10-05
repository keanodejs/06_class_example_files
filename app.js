// express.js

var express = require('express');
var app = express();
var fs = require('fs');

var obj = require('./module/obj.js');

// 1st way of getting a file;
var objJSON = require('./contact.json');

// jade, handlebars, ejs
app.set('view engine', 'ejs');

// route
app.get('/', function(req, res) {

    // var obj = {
    //     title: 'Home Page',

    //     getInfo: function() {
    //         return 'claus';
    //     }
    // }


    res.render('index', obj);
});

app.get('/contact', function(req, res) {
    //var objJSON = {"title" : "Contact", "name" : "Iben"}
    //var jsObj = {title : 'Contact', name : 'Iben'}

    fs.readFile('contact.json', 'utf-8',  function(err, data) {
    	if (err) {
    		throw err;
    		console.log(err);
    	}
        res.render('contact', JSON.parse(data));
    });



});

app.listen(3001);











