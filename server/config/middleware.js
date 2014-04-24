var logger      = require('morgan');
var bodyParser  = require('body-parser');

app.use(logger('dev'));
app.use(bodyParser());
app.use(express.static(__dirname + '/../../app'));
