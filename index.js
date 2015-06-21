module.exports = (function() {
    
    var express = require('express');
    var app = express();
    
    var handlebars = require('express-handlebars');
    app.engine('hbs', handlebars({defaultLayout: 'single', extname: '.hbs'}));
    app.set('view engine', 'hbs');
    app.use('/assets', express.static('assets'));

    app.get('/', function(req, res) { 
        con.handlebars(__dirname + '/views/index.hbs', function(err, html){ 
            res.write(html);
            res.end();
        });
    });
    
    // -- register 404 handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found from client');
        err.status = 404;
        next(err);
    });

    // -- register 500 handler (dev)
    app.use(function (err, req, res, next) {
        if (process.env.ENVIRONMENT == 'production') {
            res.status(500).send('An error has occured.');
        } else {
            res.status(err.status).send('An error has occured:', {
                message: err.message,
                error: err
            });
        }
    });
    
    return app;
    
})();