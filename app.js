var express = require('express'),
    path = require('path'),
    os = require('os'),
    // errorHandler = require('errorhandler'),
    markdown = require('./routes/markdown');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, 'public')));

// development only
// if ('development' == app.get('env')) {
//     app.use(errorHandler());
//     app.set('host', 'http://localhost');
// }

app.get('*', markdown.handler);

app.listen(app.get('port'), function(){
    var h = (app.get('host') || os.hostname() || 'unknown') + ':' + app.get('port');
    console.log('Express server listening at ' + h);
});
