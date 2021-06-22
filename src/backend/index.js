//=======[ Settings, Imports & Data ]==========================================

var PORT    = 3000;

var express = require('express');
var app     = express();
var utils   = require('./mysql-connector');

// to parse application/json
app.use(express.json()); 
// to serve static files
app.use(express.static('/home/node/app/static/'));

var datos = require('./datos.json');

//=======[ Main module code ]==================================================

app.get('/devices', function(req, res){
    res.json(datos);
});
app.get('/devices/:id', function(req, res){
    //map,filter,reduce
    let datosFiltrados=datos.filter(item => item.id ==req.params.id);
    res.json(datosFiltrados[0]);
});
// recibe ID - state e impacta el cambio y devuelve
app.post('/devices/', function(req, res, next) {
    let datosFiltrados=datos.filter(item => item.id ==req.body.id);

    if (datosFiltrados.length>0){
        datosFiltrados[0].state=req.body.state;
    }

    res.json(datosFiltrados);
});
app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
