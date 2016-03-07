// Import required modules.
var express = require('express');

// Initialize our Express app.
var app = express();

// Listen for incoming requests and serve them.
app.listen(process.env.PORT || 3002);

console.log(__dirname);
app.use(express.static(__dirname + '/public'));