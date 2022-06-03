const router = require('express').Router();
const { mongoose } = require('../modelo/conexion')
var Colonias = require('../modelo/schema')
var Educacion = require('../modelo/schemaescuela')
var  Salud = require('../modelo/schemasalud')
const archivo = require('../controlador/archivo')

router.get('/', (req,res)=> {
    res.render('index');
});

router.route('/obtenerdatoscolonias').get( (req,res)=> {
    Colonias.find(function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatoshospitalprivado').get( (req,res)=> {
    Salud.find({nivel : "Hospital privado"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatoshospitalpublico').get( (req,res)=> {
    Salud.find({nivel : "Hospital publico"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatosconsultorioprivado').get( (req,res)=> {
    Salud.find({nivel : "Consultorio medico privado"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatosconsultoriopublico').get( (req,res)=> {
    Salud.find({nivel : "Consultorio medico publico"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatosclinicaprivada').get( (req,res)=> {
    Salud.find({nivel : "Clinica privado"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatosclinicapublica').get( (req,res)=> {
    Salud.find({nivel : "Clinica publico"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatospreescolarprivada').get( (req,res)=> {
    Educacion.find({nivel : "preescolar privada"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatospreescolarpublica').get( (req,res)=> {
    Educacion.find({nivel : "preescolar publica"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatosprimariaprivada').get( (req,res)=> {
    Educacion.find({nivel : "primaria privada"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatosprimariapublica').get( (req,res)=> {
    Educacion.find({nivel : "primaria publica"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatossecundariaprivada').get( (req,res)=> {
    Educacion.find({nivel : "secundaria privada"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatossecundariapublica').get( (req,res)=> {
    Educacion.find({nivel : "secundaria publica"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatospreparatoriaprivada').get( (req,res)=> {
    Educacion.find({nivel : "media superior privada"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatospreparatoriapublica').get( (req,res)=> {
    Educacion.find({nivel : "media superior publica"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatosuniversidadprivada').get( (req,res)=> {
    Educacion.find({nivel : "superior privada"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatosuniversidadpublica').get( (req,res)=> {
    Educacion.find({nivel : "superior publica"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.post('/creararchivo',(req,res)=>{
    
    var datos = req.body
    console.log(datos)
    archivo.obtenerdatos(datos);
    res.send('ggs')
})

module.exports = router;