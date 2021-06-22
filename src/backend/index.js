//=======[ Settings, Imports & Data ]==========================================

var PORT    = 3000;

var express = require('express');
var app     = express();
var utils   = require('./mysql-connector');

// to parse application/json
app.use(express.json()); 
// to serve static files
app.use(express.static('/home/node/app/static/'));
app.set('json spaces',2);


//=======[ Routes ]==================================================
app.use(require('./routes'));

app.listen(PORT, (req, res)=> {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
