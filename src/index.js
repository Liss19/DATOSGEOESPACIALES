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
app.set('views', path.join(__dirname,'vista'));
console.log(__dirname)

// rutas
app.use(require('./rutas/index'));

//port
app.set('port', process.env.PORT || 3000)

//archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

//body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true, parameterLimit: 100000 }));

//servidor
app.listen(app.get('port'),() =>{
    console.log(`Server on port ${app.get('port')}`);
});