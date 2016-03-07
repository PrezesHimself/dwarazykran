// Import required modules.
var express = require('express');
var path = require('path');

// Initialize our Express app.
var app = express();

app.use(express.static(__dirname + '/public'));

// Listen for incoming requests and serve them.
app.listen(process.env.PORT || 3002);