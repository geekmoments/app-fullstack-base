const {Router} = require('express');
const router = new Router();
var datos = require('../datos.json');

router.get('/devices', (req, res)=>{
    res.json(datos);
});
router.get('/devices/:id', (req, res)=>{
    //map,filter,reduce
    let datosFiltrados=datos.filter(item => item.id ==req.params.id);
    res.json(datosFiltrados[0].name);
    console.log(datosFiltrados[0].name);
});
// recibe ID - state e impacta el cambio y devuelve
router.post('/devices/', (req, res, next)=> {
    let datosFiltrados=datos.filter(item => item.id ==req.body.id);

    if (datosFiltrados.length>0){
        datosFiltrados[0].state=req.body.state;
    }

    res.json(datosFiltrados);
});
router.post('/new',(req,res)=>{
    var {id,name,description,state,type}= req.body;
    if (id && name && description && state && type){
        res.json('updated');
    }else{
        res.send('wrong request');

    }
});
module.exports = router;