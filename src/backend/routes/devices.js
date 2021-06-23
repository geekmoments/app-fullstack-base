const {Router} = require('express');
const router = new Router();
var datos = require('../datos.json');
//require('underscore');


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
       // datos.splice(datosFiltrados[0].id,1);
    if (datosFiltrados.length>0){
        datosFiltrados[0].state=req.body.state;
    }

    res.json(datosFiltrados);
});
router.post('/new',(req,res)=>{
    const id = datos.length+1;
    const {name,description,state,type}= req.body;
    const newDevice={id,...req.body};

    if (name && description && state && type){

        datos.push(newDevice);
        res.json(datos);

    }else{
        res.status(500).json({error:'wrong request'});

    }
});
router.delete('/delete/:id',(req, res,next) =>{
    let datosFiltrados=datos.filter(item => item.id ==req.params.id);
    datos.splice(datosFiltrados[0].id,1);
    res.json(datos);
    console.log(datosFiltrados[0].name);
});
//---ERROR--
router.put('/update/:id',(req, res) =>{
    let {id} = req.params;
    const {name,description,state,type}=req.body;
    if (name && description && state && type) {
        let datosFiltrados=datos.filter(item => item.id ==req.params.id);
        if(datosFiltrados){
            datos.name = name;
            datos.description = description;
            datos.state = state;
            datos.type = type;
        }
        res.json(datos);
    }else{
        res.status(500).json({error:'Error'})
    }
});

module.exports = router;