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

var datos = require('./datos.json');

//=======[ Main module code ]==================================================

app.get('/devices', (req, res)=>{
    res.json(datos);
});
app.get('/devices/:id', (req, res)=>{
    //map,filter,reduce
    let datosFiltrados=datos.filter(item => item.id ==req.params.id);
    res.json(datosFiltrados[0].name);
    console.log(datosFiltrados[0].name);
});
// recibe ID - state e impacta el cambio y devuelve
app.post('/devices/', (req, res, next)=> {
    let datosFiltrados=datos.filter(item => item.id ==req.body.id);

    if (datosFiltrados.length>0){
        datosFiltrados[0].state=req.body.state;
    }

    res.json(datosFiltrados);
});
app.listen(PORT, (req, res)=> {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
