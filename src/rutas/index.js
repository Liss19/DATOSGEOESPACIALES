const router = require('express').Router();
const { mongoose } = require('../modelo/conexion')
var Colonias = require('../modelo/schema')
// const { marcadores } = require('../public/js/main')

router.get('/', (req,res)=> {
    

    Colonias.find(function(err,datos){
        if(err) return console.error(err)
        const {lat, long} = datos[0].toObject()
        console.log(lat, long)
        // marcadores(lat,long)

        res.render('index');
    })

});

module.exports = router;