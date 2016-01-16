var http = require('http');
var fs = require('fs');
var list = require('./mechmarket');
var express = require('express');
var app = express();

var mechmarketList = list.sellingList;

//environment variable
var port = process.env.PORT || 3000;

// static files + template engine
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

//http request method get selling mechmarketList
app.get('/', function(req, res) {
	res.render('index', {list: mechmarketList});
});

app.get('/selling/:id', function(req, res) {
	res.json({ firstname: 'john', lastmame:'doe'});
});

app.listen(port); 
