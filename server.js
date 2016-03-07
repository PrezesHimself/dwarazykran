// Import required modules.
var express = require('express');
var path = require('path');

// Initialize our Express app.
var app = express();

// Listen for incoming requests and serve them.
app.listen(process.env.PORT || 3002);

console.log(__dirname, __dirname + '/.tmp', 'tu', path.join(__dirname, 'public/stylesheets'));
app.use(express.static(path.join(__dirname, '../.tmp')));