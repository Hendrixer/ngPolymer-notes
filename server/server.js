express = require('express');

app = express();

require('./config');
require('./routes');
module.exports = app;