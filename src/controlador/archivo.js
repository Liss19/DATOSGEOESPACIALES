var fs = require('fs');
var stringify1 = require('csv-stringify');

function obtenerdatos(datos) {
    creararchivo(datos)
    //
}

// function obtenerdatosrutas(datos) {
//     creararchivorutas(datos)
// }

function creararchivo(datos) {
    let data = JSON.stringify(datos);
    fs.writeFile('datosgeoespaciales.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
    creararchivocsv(datos)
}

function creararchivocsv(datos){
    let data = JSON.stringify(datos);
    stringify1(data, {
        header: true
    }, function (err, output) {
        fs.writeFile('datosgeoespaciales.csv', output);
    })
}

// function creararchivorutas(datos) {
//     let data = JSON.stringify(datos);
//     fs.writeFile('datosgeoespacialesrutas.json', data, (err) => {
//         if (err) throw err;
//         console.log('Data written to file');
//     });
// }

module.exports = { obtenerdatos, creararchivo}