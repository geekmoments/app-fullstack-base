

//=======[ Settings, Imports & Data ]==========================================
var PORT    = 3000;
var express = require('express');
var app     = express();
var utils   = require('./mysql-connector');
app.set('json spaces',2);

// middlewares
app.use(express.json()); 
// to serve static files
app.use(express.static('/home/node/app/static/'));

//=======[ Routes ]==================================================
app.use(require('./routes/devices'));

app.listen(PORT, (req, res)=> {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
