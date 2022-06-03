const express = require('express');
const engine = require('ejs-mate');
const path = require('path');


//inicializaciones
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//configuracion de la vista
app.engine('ejs',engine);
app.set('view engine','ejs');
app.set('views', 'C:/Users/Gambo/Desktop/DATOSGEOESPACIALES/src/vista');

// rutas
app.use(require('./rutas/index'));


//archivos estaticos
app.use(express.static('C:/Users/Gambo/Desktop/DATOSGEOESPACIALES/src/public'));

//servidor
app.listen(3000,() =>{
    console.log('Server on port 3000');
});