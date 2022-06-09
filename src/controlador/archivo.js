var fs = require('fs');
var csvwriter = require('csv-writer')

function obtenerdatos(datos) {
    creararchivosalud(datos)
    creararchivocsvsalud(datos)
}

function obtenerdatoseducacion(datos) {
    creararchivoeducacion(datos)
    creararchivocsveducacion(datos)
}

function obtenerdatosservicios(datos) {
    creararchivosaludservicios(datos)
    creararchivocsvsaludservicios(datos)
}

function obtenerdatoseducacionservicios(datos) {
    creararchivoeducacionservicios(datos)
    creararchivocsveducacionservicios(datos)
}

function creararchivosalud(datos) {
    let data = JSON.stringify(datos);
    fs.writeFile('datosgeoespacialessalud.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}

function creararchivoeducacion(datos) {
    let data = JSON.stringify(datos);
    fs.writeFile('datosgeoespacialeseducacion.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}

function creararchivosaludservicios(datos) {
    let data = JSON.stringify(datos);
    fs.writeFile('datosgeoespacialessaludservicios.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}

function creararchivoeducacionservicios(datos) {
    let data = JSON.stringify(datos);
    fs.writeFile('datosgeoespacialeseducacionservicios.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}

async function creararchivocsvsalud(datos) {
    let data = JSON.stringify(datos);
    var createCsvWriter = csvwriter.createObjectCsvWriter

    // Passing the column names intp the module
    const csvWriter = createCsvWriter({

        // Output csv file name is geek_data
        path: 'datosgeoespacialessalud.csv',
        header: [

            // Title of the columns (column_names)
            { id: 'alcaldia', title: 'alcaldia' },
            { id: 'radio', title: 'radio' },
            { id: 'id_colonia', title: 'id_colonia' },
            { id: 'colonia', title: 'colonia' },
            { id: 'hospitalesprivados', title: 'hospitalesprivados' },
            { id: 'hospitalespublicos', title: 'hospitalespublicos' },
            { id: 'consultoriosprivados', title: 'consultoriosprivados' },
            { id: 'consultoriospublicos', title: 'consultoriospublicos' },
            { id: 'clinicasprivadas', title: 'clinicasprivadas' },
            { id: 'clinicaspublicas', title: 'clinicaspublicas' }
        ]
    });

    await csvWriter
        .writeRecords(datos)
        .then(() => console.log('Data uploaded into csv successfully'));
}

async function creararchivocsveducacion(datos) {
    let data = JSON.stringify(datos);
    var createCsvWriter = csvwriter.createObjectCsvWriter

    // Passing the column names intp the module
    const csvWriter = createCsvWriter({

        // Output csv file name is geek_data
        path: 'datosgeoespacialeseducacion.csv',
        header: [

            // Title of the columns (column_names)
            { id: 'alcaldia', title: 'alcaldia' },
            { id: 'radio', title: 'radio' },
            { id: 'id_colonia', title: 'id_colonia' },
            { id: 'colonia', title: 'colonia' },
            { id: 'preescolarprivados', title: 'preescolarprivados' },
            { id: 'preescolarpublicos', title: 'preescolarpublicos' },
            { id: 'primariasprivadas', title: 'primariasprivadas' },
            { id: 'primariaspublicas', title: 'primariaspublicas' },
            { id: 'secundariasprivadas', title: 'secundariasprivadas' },
            { id: 'secundariaspublicas', title: 'secundariaspublicas' },
            { id: 'preparatoriasprivadas', title: 'preparatoriasprivadas' },
            { id: 'preparatoriaspublicas', title: 'preparatoriaspublicas' },
            { id: 'universidadesprivadas', title: 'universidadesprivadas' },
            { id: 'universidadespublicas', title: 'universidadespublicas' }
        ]
    });

    await csvWriter
        .writeRecords(datos)
        .then(() => console.log('Data uploaded into csv successfully'));
}

async function creararchivocsvsaludservicios(datos) {
    let data = JSON.stringify(datos);
    var createCsvWriter = csvwriter.createObjectCsvWriter

    //"id_colonia": point.id, "colonia": point.nombre, "radio" : radius, "tipo" : point.tipo, "nivel": point.nivel, "id_unidad": point.id, "nombre_unidad": point.nombre, "distancia": Math.round(distance)
    // Passing the column names intp the module
    const csvWriter = createCsvWriter({

        // Output csv file name is geek_data
        path: 'datosgeoespacialessaludservicios.csv',
        header: [

            // Title of the columns (column_names)
            { id: 'alcaldia', title: 'alcaldia' },
            { id: 'id_colonia', title: 'id_colonia' },
            { id: 'colonia', title: 'colonia' },
            { id: 'radio', title: 'radio' },
            { id: 'tipo', title: 'tipo' },
            { id: 'nivel', title: 'nivel' },
            { id: 'id_unidad', title: 'id_unidad' },
            { id: 'nombre_unidad', title: 'nombre_unidad' },
            { id: 'distancia', title: 'distancia' }
        ]
    });

    await csvWriter
        .writeRecords(datos)
        .then(() => console.log('Data uploaded into csv successfully'));
}

async function creararchivocsveducacionservicios(datos) {
    let data = JSON.stringify(datos);
    var createCsvWriter = csvwriter.createObjectCsvWriter

    //"id_colonia": point.id, "colonia": point.nombre, "radio" : radius, "tipo" : point.tipo, "nivel": point.nivel, "id_unidad": point.id, "nombre_unidad": point.nombre, "distancia": Math.round(distance)
    // Passing the column names intp the module
    const csvWriter = createCsvWriter({

        // Output csv file name is geek_data
        path: 'datosgeoespacialeseducacionservicios.csv',
        header: [

            // Title of the columns (column_names)
            { id: 'alcaldia', title: 'alcaldia' },
            { id: 'id_colonia', title: 'id_colonia' },
            { id: 'colonia', title: 'colonia' },
            { id: 'radio', title: 'radio' },
            { id: 'tipo', title: 'tipo' },
            { id: 'nivel', title: 'nivel' },
            { id: 'id_unidad', title: 'id_unidad' },
            { id: 'nombre_unidad', title: 'nombre_unidad' },
            { id: 'distancia', title: 'distancia' }
        ]
    });

    await csvWriter
        .writeRecords(datos)
        .then(() => console.log('Data uploaded into csv successfully'));
}
// function creararchivorutas(datos) {
//     let data = JSON.stringify(datos);
//     fs.writeFile('datosgeoespacialesrutas.json', data, (err) => {
//         if (err) throw err;
//         console.log('Data written to file');
//     });
// }

module.exports = { obtenerdatos, obtenerdatoseducacion, obtenerdatosservicios, obtenerdatoseducacionservicios, creararchivosalud, creararchivoeducacion, creararchivosaludservicios, creararchivoeducacionservicios, creararchivocsvsalud, creararchivocsveducacion, creararchivocsveducacionservicios, creararchivocsvsaludservicios }