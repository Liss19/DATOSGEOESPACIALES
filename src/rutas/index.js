const router = require('express').Router();
const { mongoose } = require('../modelo/conexion')
var Colonias = require('../modelo/schema')
var Educacion = require('../modelo/schemaescuela')
var  Salud = require('../modelo/schemasalud')
const archivo = require('../controlador/archivo')

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ limit: '1024mb', extended: true });

// router.post('...', urlencodedParser, function (req, res) {
// ...
// });

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
    Salud.find({nivel : "Hospital general privado"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatoshospitalpublico').get( (req,res)=> {
    Salud.find({nivel : "Hospital general publico"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatosconsultorioprivado').get( (req,res)=> {
    Salud.find({nivel : "Consultorios de medicina general privado"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatosconsultoriopublico').get( (req,res)=> {
    Salud.find({nivel : "Consultorios de medicina general publico"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatosclinicaprivada').get( (req,res)=> {
    Salud.find({nivel : "Clinicas general privada"},function(err,datos){
        if (err) {
            res.send(err);
          } else {
            res.send(datos);
          }
    })

});

router.route('/obtenerdatosclinicapublica').get( (req,res)=> {
    Salud.find({nivel : "Clinicas general publica"},function(err,datos){
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

router.post('/creararchivosalud',urlencodedParser,(req,res)=>{
    
    var datos = req.body
    console.log(datos)
    archivo.obtenerdatos(datos);
    res.send('ggs')
})

router.post('/creararchivoeducacion',urlencodedParser,(req,res)=>{
    
    var datos = req.body
    console.log(datos)
    archivo.obtenerdatoseducacion(datos);
    res.send('ggs')
})

router.post('/creararchivosaludservicios',urlencodedParser,(req,res)=>{
    
  var datos = req.body
  console.log(datos)
  archivo.obtenerdatosservicios(datos);
  res.send('ggs')
})

router.post('/creararchivoeducacionservicios',urlencodedParser,(req,res)=>{
  
  var datos = req.body
  console.log(datos)
  archivo.obtenerdatoseducacionservicios(datos);
  res.send('ggs')
})

router.get('/descargar',urlencodedParser, (req,res)=>{
    res.download('datosgeoespacialessalud.json', function(error){
        console.log("Error : ", error)
    })
})
router.get('/descargarcsv',urlencodedParser, (req,res)=>{
  res.download('datosgeoespacialessalud.csv', function(error){
      console.log("Error : ", error)
  })
})

router.get('/descargareducacion',urlencodedParser, (req,res)=>{
    res.download('datosgeoespacialeseducacion.json', function(error){
        console.log("Error : ", error)
    })
})

router.get('/descargareducacioncsv',urlencodedParser, (req,res)=>{
  res.download('datosgeoespacialeseducacion.csv', function(error){
      console.log("Error : ", error)
  })
})

router.get('/descargarservicios',urlencodedParser, (req,res)=>{
  res.download('datosgeoespacialessaludservicios.json', function(error){
      console.log("Error : ", error)
  })
})

router.get('/descargarservicioscsv',urlencodedParser, (req,res)=>{
  res.download('datosgeoespacialessaludservicios.csv', function(error){
      console.log("Error : ", error)
  })
})

router.get('/descargareducacionservicios',urlencodedParser, (req,res)=>{
  res.download('datosgeoespacialeseducacionservicios.json', function(error){
      console.log("Error : ", error)
  })
})

router.get('/descargareducacionservicioscsv',urlencodedParser, (req,res)=>{
  res.download('datosgeoespacialeseducacionservicios.csv', function(error){
      console.log("Error : ", error)
  })
})


module.exports = router;