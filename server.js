var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
app.get('/version', function(req, res) {
    res.send(process.env.HEROKU_APP_NAME + ' ' + process.env.HEROKU_RELEASE_VERSION)
})
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);