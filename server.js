var express = require('express');
var app = express();
app.use(express.static('.'));

var server = app.listen(4000, function() {
	console.log('Server running.');
});
