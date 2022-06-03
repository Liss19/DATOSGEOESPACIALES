var fs = require('fs');
var csvwriter = require('csv-writer')

function obtenerdatos(datos) {
    creararchivosalud(datos)
}

function obtenerdatoseducacion(datos) {
    creararchivoeducacion(datos)
    creararchivocsvsalud(datos)
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
            { id: 'hospitalesprivados', title: 'hospitalesprivados' },
            { id: 'hospitalespublicos', title: 'hospitalespublicos' },
            { id: 'consultoriosprivados', title: 'consultoriosprivados' },
            { id: 'consultoriospublicos', title: 'consultoriospublicos' },
            { id: 'clinicasprivadas', title: 'clinicasprivadas' },
            { id: 'clinicaspublicas', title: 'clinicaspublicas' }
        ]
    });

    // Writerecords function to add records
    console.log(data)
    await csvWriter
        .writeRecords(data)
        .then(() => console.log('Data uploaded into csv successfully'));
}

// function creararchivorutas(datos) {
//     let data = JSON.stringify(datos);
//     fs.writeFile('datosgeoespacialesrutas.json', data, (err) => {
//         if (err) throw err;
//         console.log('Data written to file');
//     });
// }

module.exports = { obtenerdatos, obtenerdatoseducacion, creararchivosalud, creararchivoeducacion }