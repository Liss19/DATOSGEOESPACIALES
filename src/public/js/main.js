// user glocate  pass SRQncgBTq9I5kLjq



//var marker, marcador
var markercolonias = [], colonias2 = [], colonias1 = [], escuelas1 = []
var markerconsultpriv = [], markerhospitalpriv = [], markerhospitalpub = [], markerconsultpub = [], markerclinicapriv = [], markerclinicapub = [], markerpreescolarpriv = [], markerpreescolarpub = [], markerprimariapriv = [], markerprimariapub = [], markersecundariapriv = [], markerhospitalpriv2 = [], markersecundariapub = [], markerpreparatoriapriv = [], markerpreparatoriapub = [], markeruniversidadpriv = [], markeruniversidadpub = []
var markercp, markerhp, markerhpub, markercpub, markerclinp, markerclinpub, markerpreep, markerpreepub, markerprimp, markerprimpub, markersecp, markersecpub, markerprepap, markerprepapub, markerunip, markerunipub
var infogeneralsalud = [], infogeneraleducacion = [], infohospitalpriv = [], infohospitalpub = [], infoconsulturiopriv = [], infoconsultoriopub = [], infoclinicapriv = [], infoclinicapub = [], infopreepriv = [], infopreepub = [], infoprimpriv = [], infoprimpub = [], infosecpriv = [], infosecpub = [], infoprepapriv = [], infoprepapub = [], infounipriv = [], infounipub = []
var consultprivado = [], hospitalprivado = [], hospitalpublico = [], consultpublico = [], clinicapublica = [], clinicaprivada = [], preepublico = [], preeprivado = [], primpublica = [], primprivada = [], secpublica = [], secprivada = [], prepaprivada = [], prepapublica = [], uniprivada = [], unipublica = []
let latlng = 0
let i = 0, contador;
var distance, distance2, rutas2 = [], rutasremp = [];

const map = L.map('map-template').setView([19.42847, -99.12766], 15)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

var marcadorHospitales = L.AwesomeMarkers.icon({
  icon: 'hospital',
  prefix: 'fa',
  markerColor: 'green',
  iconColor: 'white'
});

var marcadorHospitalesPub = L.AwesomeMarkers.icon({
  icon: 'hospital',
  prefix: 'fa',
  markerColor: 'red',
  iconColor: 'white'
});

var marcadorConsultorios = L.AwesomeMarkers.icon({
  icon: 'hospital',
  prefix: 'fa',
  markerColor: 'BlueViolet',
  iconColor: 'white'
});

var marcadorConsultoriosPub = L.AwesomeMarkers.icon({
  icon: 'hospital',
  prefix: 'fa',
  markerColor: 'LightSalmon',
  iconColor: 'white'
});

var marcadorClinicas = L.AwesomeMarkers.icon({
  icon: 'hospital',
  prefix: 'fa',
  markerColor: 'MediumSpringGreen',
  iconColor: 'white'
});

var marcadorClinicasPub = L.AwesomeMarkers.icon({
  icon: 'hospital',
  prefix: 'fa',
  markerColor: 'Olive',
  iconColor: 'white'
});

var marcadorPreescolar = L.AwesomeMarkers.icon({
  icon: 'school',
  prefix: 'fa',
  markerColor: 'purple',
  iconColor: 'white'
});

var marcadorPreescolarPub = L.AwesomeMarkers.icon({
  icon: 'school',
  prefix: 'fa',
  markerColor: 'Pink',
  iconColor: 'white'
});

var marcadorPrimarias = L.AwesomeMarkers.icon({
  icon: 'school',
  prefix: 'fa',
  markerColor: 'purple',
  iconColor: 'white'
});

var marcadorPrimariasPub = L.AwesomeMarkers.icon({
  icon: 'school',
  prefix: 'fa',
  markerColor: 'Crimson',
  iconColor: 'white'
});

var marcadorSecundarias = L.AwesomeMarkers.icon({
  icon: 'school',
  prefix: 'fa',
  markerColor: 'Coral',
  iconColor: 'white'
});

var marcadorSecundariasPub = L.AwesomeMarkers.icon({
  icon: 'school',
  prefix: 'fa',
  markerColor: 'Tomato',
  iconColor: 'white'
});

var marcadorPreparatorias = L.AwesomeMarkers.icon({
  icon: 'school',
  prefix: 'fa',
  markerColor: 'DarkOrangel',
  iconColor: 'white'
});

var marcadorPreparatoriasPub = L.AwesomeMarkers.icon({
  icon: 'school',
  prefix: 'fa',
  markerColor: 'Gold',
  iconColor: 'white'
});

var marcadorUniversidades = L.AwesomeMarkers.icon({
  icon: 'school',
  prefix: 'fa',
  markerColor: 'DarkCyan',
  iconColor: 'white'
});

var marcadorUniversidadesPub = L.AwesomeMarkers.icon({
  icon: 'school',
  prefix: 'fa',
  markerColor: 'Teal',
  iconColor: 'white'
});

var marcadorColonias = L.AwesomeMarkers.icon({
  icon: 'user',
  prefix: 'fa',
  markerColor: 'black',
  iconColor: 'white'
});

var estilopopup = { 'maxWitdth': '300' }

//configurar popup
function popup(feature, layer) {
  if (feature.properties && feature.properties.route_name) {
    layer.bindPopup("<b> Nombre: " + feature.properties.route_name + "</b><br><b> RutaID: " + feature.properties.route_id + "</b>")
  }
}

//agregar geojson
L.geoJSON(rutas).addTo(map);

var rutasJS = L.geoJSON(rutas, {
  onEachFeature: popup,
  color: "#CB3234",
  weight: 1
}).addTo(map);

// Datos de MongoDB
colonias()
async function colonias() {
  colonias1 = await fetch('https://datosgeoespaciales.herokuapp.com/obtenerdatoscolonias') // 1
    .then(response => response.json()) // 2
}

hospitalesprivados()
async function hospitalesprivados() {
  hospitalprivado = await fetch('https://datosgeoespaciales.herokuapp.com/obtenerdatoshospitalprivado') // 1
    .then(response => response.json()) // 2
}

hospitalespublicos()
async function hospitalespublicos() {
  hospitalpublico = await fetch('https://datosgeoespaciales.herokuapp.com/obtenerdatoshospitalpublico') // 1
    .then(response => response.json()) // 2
}

consultoriosprivados()
async function consultoriosprivados() {
  consultprivado = await fetch('https://datosgeoespaciales.herokuapp.com/obtenerdatosconsultorioprivado') // 1
    .then(response => response.json()) // 2
}

consultoriospublicos()
async function consultoriospublicos() {
  consultpublico = await fetch('https://datosgeoespaciales.herokuapp.com/obtenerdatosconsultoriopublico') // 1
    .then(response => response.json()) // 2
}

clinicasprivadas()
async function clinicasprivadas() {
  clinicaprivada = await fetch('https://datosgeoespaciales.herokuapp.com/obtenerdatosclinicaprivada') // 1
    .then(response => response.json()) // 2
}

clinicaspublicas()
async function clinicaspublicas() {
  clinicapublica = await fetch('https://datosgeoespaciales.herokuapp.com/obtenerdatosclinicapublica') // 1
    .then(response => response.json()) // 2
}

preescolarprivada()
async function preescolarprivada() {
  preeprivado = await fetch('https://datosgeoespaciales.herokuapp.com/obtenerdatospreescolarprivada') // 1
    .then(response => response.json()) // 2
}

preescolarpublica()
async function preescolarpublica() {
  preepublico = await fetch('https://datosgeoespaciales.herokuapp.com/obtenerdatospreescolarpublica') // 1
    .then(response => response.json()) // 2
}

primariaprivada()
async function primariaprivada() {
  primprivada = await fetch('https://datosgeoespaciales.herokuapp.com/obtenerdatosprimariaprivada') // 1
    .then(response => response.json()) // 2
}

primariapublica()
async function primariapublica() {
  primpublica = await fetch('https://datosgeoespaciales.herokuapp.com/obtenerdatosprimariapublica') // 1
    .then(response => response.json()) // 2
}

secundariaprivada()
async function secundariaprivada() {
  secprivada = await fetch('https://datosgeoespaciales.herokuapp.com/obtenerdatossecundariaprivada') // 1
    .then(response => response.json()) // 2
}

secundariapublica()
async function secundariapublica() {
  secpublica = await fetch('https://datosgeoespaciales.herokuapp.com/obtenerdatossecundariapublica') // 1
    .then(response => response.json()) // 2
}

preparatoriaprivada()
async function preparatoriaprivada() {
  prepaprivada = await fetch('https://datosgeoespaciales.herokuapp.com/obtenerdatospreparatoriaprivada') // 1
    .then(response => response.json()) // 2
}

preparatoriapublica()
async function preparatoriapublica() {
  prepapublica = await fetch('https://datosgeoespaciales.herokuapp.com/obtenerdatospreparatoriapublica') // 1
    .then(response => response.json()) // 2
}

universidadprivada()
async function universidadprivada() {
  uniprivada = await fetch('https://datosgeoespaciales.herokuapp.com/obtenerdatosuniversidadprivada') // 1
    .then(response => response.json()) // 2
}

universidadpublica()
async function universidadpublica() {
  unipublica = await fetch('https://datosgeoespaciales.herokuapp.com/obtenerdatosuniversidadpublica') // 1
    .then(response => response.json()) // 2
}

// Creacion de Marcadores
function hospitalpriv() {
  const radius = document.getElementById('radiosalud').value
  var check = document.getElementById('privadosalud');
  var checked = check.checked;

  if (checked) {
    colonias2.map((point1) => {
      markerhospitalpriv2.length = 0;
      hospitalprivado.map((point) => {
        rutas2.length = 0;
        distance = map.distance([point1.lat, point1.long], [point.latitud, point.longitud])

        if (distance <= radius) {
          markerhp = L.marker([point.latitud, point.longitud], { icon: marcadorHospitales }).addTo(map)
          paradas.map((punto) => {
            punto.features.map((punto2) => {
              distance2 = map.distance([punto2.geometry.coordinates[1], punto2.geometry.coordinates[0]], [point.latitud, point.longitud]);
              if (distance2 <= 500) {
                rutas2.push(punto2.properties.route_ids);
              }
            })
          })
          let single = [].concat(...rutas2);
          const dataArr = new Set(single);
          let result = [...dataArr];
          markerhp.bindPopup(('<b>' + point.nombre + '</b><br>' + point.nivel + '<br><p style="width: 100%;">' + result + '</p>'), estilopopup).openPopup()
          markerhospitalpriv.push(markerhp)
          markerhospitalpriv2.push(markerhp)
        }
      })
      
      infohospitalpriv.push(markerhospitalpriv2.length)
    })
  } else {
    markerhospitalpriv.map((point) => {
      map.removeLayer(point);
    })
  }
  console.log(infohospitalpriv)
}


function hospitalpub() {
  const radius = document.getElementById('radiosalud').value
  var check = document.getElementById('publicosalud');
  var checked = check.checked;
  if (checked) {
    colonias2.map((point1) => {
      hospitalpublico.map((point) => {
        distance = map.distance([point1.lat, point1.long], [point.latitud, point.longitud])
        if (distance <= radius) {
          markerhpub = L.marker([point.latitud, point.longitud], { icon: marcadorHospitalesPub }).addTo(map)
          paradas.map((punto) => {
            punto.features.map((punto2) => {
              distance2 = map.distance([punto2.geometry.coordinates[1], punto2.geometry.coordinates[0]], [point.latitud, point.longitud]);
              if (distance2 <= 200) {
                rutas2.push(punto2.properties.route_ids);
              }
            })
          })
          let single = [].concat(...rutas2);
          const dataArr = new Set(single);
          let result = [...dataArr];
          markerhpub.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel + '<br>' + result).openPopup()
          markerhospitalpub.push(markerhpub)
        }
      })
    })
  } else {
    markerhospitalpub.map((point) => {
      map.removeLayer(point);
    })

  }
}

function consultpriv() {
  const radius = document.getElementById('radiosalud').value
  var check = document.getElementById('privadosalud');
  var checked = check.checked;
  if (checked) {
    consultprivado.map((point) => {
      colonias2.map((point1) => {
        distance = map.distance([point1.lat, point1.long], [point.latitud, point.longitud])
        if (distance <= radius) {
          markercp = L.marker([point.latitud, point.longitud], { icon: marcadorConsultorios }).addTo(map)
          paradas.map((punto) => {
            punto.features.map((punto2) => {
              distance2 = map.distance([punto2.geometry.coordinates[1], punto2.geometry.coordinates[0]], [point.latitud, point.longitud]);
              if (distance2 <= 200) {
                rutas2.push(punto2.properties.route_ids);
              }
            })
          })
          let single = [].concat(...rutas2);
          const dataArr = new Set(single);
          let result = [...dataArr];
          markercp.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel + '<br>' + result).openPopup()
          markerconsultpriv.push(markercp)
        }
      })
    })
  } else {
    markerconsultpriv.map((point) => {
      map.removeLayer(point);
    })

  }
}

function consultpub() {
  const radius = document.getElementById('radiosalud').value
  var check = document.getElementById('publicosalud');
  var checked = check.checked;
  if (checked) {
    consultpublico.map((point) => {
      colonias2.map((point1) => {
        distance = map.distance([point1.lat, point1.long], [point.latitud, point.longitud])
        if (distance <= radius) {
          markercpub = L.marker([point.latitud, point.longitud], { icon: marcadorConsultoriosPub }).addTo(map)
          paradas.map((punto) => {
            punto.features.map((punto2) => {
              distance2 = map.distance([punto2.geometry.coordinates[1], punto2.geometry.coordinates[0]], [point.latitud, point.longitud]);
              if (distance2 <= 200) {
                rutas2.push(punto2.properties.route_ids);
              }
            })
          })
          let single = [].concat(...rutas2);
          const dataArr = new Set(single);
          let result = [...dataArr];
          markercpub.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel + '<br>' + result).openPopup()
          markerconsultpub.push(markercp)
        }
      })
    })
  } else {
    markerconsultpub.map((point) => {
      map.removeLayer(point);
    })

  }
}

function clinicapriv() {
  const radius = document.getElementById('radiosalud').value
  var check = document.getElementById('privadosalud');
  var checked = check.checked;
  if (checked) {
    clinicaprivada.map((point) => {
      colonias2.map((point1) => {
        distance = map.distance([point1.lat, point1.long], [point.latitud, point.longitud])
        if (distance <= radius) {
          markerclinp = L.marker([point.latitud, point.longitud], { icon: marcadorClinicas }).addTo(map)
          paradas.map((punto) => {
            punto.features.map((punto2) => {
              distance2 = map.distance([punto2.geometry.coordinates[1], punto2.geometry.coordinates[0]], [point.latitud, point.longitud]);
              if (distance2 <= 200) {
                rutas2.push(punto2.properties.route_ids);
              }
            })
          })
          let single = [].concat(...rutas2);
          const dataArr = new Set(single);
          let result = [...dataArr];
          markerclinp.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel + '<br>' + result).openPopup()
          markerclinicapriv.push(markerclinp)
        }
      })
    })
  } else {
    markerclinicapriv.map((point) => {
      map.removeLayer(point);
    })

  }
}

function clinicapub() {
  const radius = document.getElementById('radiosalud').value
  var check = document.getElementById('publicosalud');
  var checked = check.checked;
  if (checked) {
    clinicapublica.map((point) => {
      colonias2.map((point1) => {
        distance = map.distance([point1.lat, point1.long], [point.latitud, point.longitud])
        if (distance <= radius) {
          markerclinpub = L.marker([point.latitud, point.longitud], { icon: marcadorClinicasPub }).addTo(map)
          paradas.map((punto) => {
            punto.features.map((punto2) => {
              distance2 = map.distance([punto2.geometry.coordinates[1], punto2.geometry.coordinates[0]], [point.latitud, point.longitud]);
              if (distance2 <= 200) {
                rutas2.push(punto2.properties.route_ids);
              }
            })
          })
          let single = [].concat(...rutas2);
          const dataArr = new Set(single);
          let result = [...dataArr];
          markerclinpub.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel + '<br>' + result).openPopup()
          markerclinicapub.push(markerclinpub)
        }
      })
    })
  } else {
    markerclinicapub.map((point) => {
      map.removeLayer(point);
    })

  }
}

function preepriv() {
  const radius = document.getElementById('radioeducacion').value
  var check = document.getElementById('privadoeducacion');
  var checked = check.checked;
  if (checked) {
    preeprivado.map((point) => {
      colonias2.map((point1) => {
        distance = map.distance([point1.lat, point1.long], [point.latitud, point.longitud])
        if (distance <= radius) {
          markerpreep = L.marker([point.latitud, point.longitud], { icon: marcadorPreescolar }).addTo(map)
          paradas.map((punto) => {
            punto.features.map((punto2) => {
              distance2 = map.distance([punto2.geometry.coordinates[1], punto2.geometry.coordinates[0]], [point.latitud, point.longitud]);
              if (distance2 <= 200) {
                rutas2.push(punto2.properties.route_ids);
              }
            })
          })
          let single = [].concat(...rutas2);
          const dataArr = new Set(single);
          let result = [...dataArr];
          markerpreep.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel + '<br>' + result).openPopup()
          markerpreescolarpriv.push(markerpreep)
        }
      })
    })
  } else {
    markerpreescolarpriv.map((point) => {
      map.removeLayer(point);
    })

  }
}

function preepub() {
  const radius = document.getElementById('radioeducacion').value
  var check = document.getElementById('publicoeducacion');
  var checked = check.checked;
  if (checked) {
    preepublico.map((point) => {
      colonias2.map((point1) => {
        distance = map.distance([point1.lat, point1.long], [point.latitud, point.longitud])
        if (distance <= radius) {
          markerpreepub = L.marker([point.latitud, point.longitud], { icon: marcadorPreescolarPub }).addTo(map)
          paradas.map((punto) => {
            punto.features.map((punto2) => {
              distance2 = map.distance([punto2.geometry.coordinates[1], punto2.geometry.coordinates[0]], [point.latitud, point.longitud]);
              if (distance2 <= 200) {
                rutas2.push(punto2.properties.route_ids);
              }
            })
          })
          let single = [].concat(...rutas2);
          const dataArr = new Set(single);
          let result = [...dataArr];
          markerpreepub.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel + '<br>' + result).openPopup()
          markerpreescolarpub.push(markerpreepub)
        }
      })
    })
  } else {
    markerpreescolarpub.map((point) => {
      map.removeLayer(point);
    })

  }
}

function primpriv() {
  const radius = document.getElementById('radioeducacion').value
  var check = document.getElementById('privadoeducacion');
  var checked = check.checked;
  if (checked) {
    primprivada.map((point) => {
      colonias2.map((point1) => {
        distance = map.distance([point1.lat, point1.long], [point.latitud, point.longitud])
        if (distance <= radius) {
          markerprimp = L.marker([point.latitud, point.longitud], { icon: marcadorPrimarias }).addTo(map)
          paradas.map((punto) => {
            punto.features.map((punto2) => {
              distance2 = map.distance([punto2.geometry.coordinates[1], punto2.geometry.coordinates[0]], [point.latitud, point.longitud]);
              if (distance2 <= 200) {
                rutas2.push(punto2.properties.route_ids);
              }
            })
          })
          let single = [].concat(...rutas2);
          const dataArr = new Set(single);
          let result = [...dataArr];
          markerprimp.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel + '<br>' + result).openPopup()
          markerprimariapriv.push(markerprimp)
        }
      })
    })
  } else {
    markerprimariapriv.map((point) => {
      map.removeLayer(point);
    })

  }
}

function primpub() {
  const radius = document.getElementById('radioeducacion').value
  var check = document.getElementById('publicoeducacion');
  var checked = check.checked;
  if (checked) {
    primpublica.map((point) => {
      colonias2.map((point1) => {
        distance = map.distance([point1.lat, point1.long], [point.latitud, point.longitud])
        if (distance <= radius) {
          markerprimpub = L.marker([point.latitud, point.longitud], { icon: marcadorPrimariasPub }).addTo(map)
          paradas.map((punto) => {
            punto.features.map((punto2) => {
              distance2 = map.distance([punto2.geometry.coordinates[1], punto2.geometry.coordinates[0]], [point.latitud, point.longitud]);
              if (distance2 <= 200) {
                rutas2.push(punto2.properties.route_ids);
              }
            })
          })
          let single = [].concat(...rutas2);
          const dataArr = new Set(single);
          console.log(result);
          markerprimpub.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel + '<br>' + result).openPopup()
          markerprimariapub.push(markerprimpub)
        }
      })
    })
  } else {
    markerprimariapub.map((point) => {
      map.removeLayer(point);
    })

  }
}

function secpriv() {
  const radius = document.getElementById('radioeducacion').value
  var check = document.getElementById('privadoeducacion');
  var checked = check.checked;
  if (checked) {
    secprivada.map((point) => {
      colonias2.map((point1) => {
        distance = map.distance([point1.lat, point1.long], [point.latitud, point.longitud])
        if (distance <= radius) {
          markersecp = L.marker([point.latitud, point.longitud], { icon: marcadorSecundarias }).addTo(map)
          paradas.map((punto) => {
            punto.features.map((punto2) => {
              distance2 = map.distance([punto2.geometry.coordinates[1], punto2.geometry.coordinates[0]], [point.latitud, point.longitud]);
              if (distance2 <= 200) {
                rutas2.push(punto2.properties.route_ids);
              }
            })
          })
          let single = [].concat(...rutas2);
          const dataArr = new Set(single);
          let result = [...dataArr];
          markersecp.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel + '<br>' + result).openPopup()
          markersecundariapriv.push(markersecp)
        }
      })
    })
  } else {
    markersecundariapriv.map((point) => {
      map.removeLayer(point);
    })

  }
}

function secpub() {
  const radius = document.getElementById('radioeducacion').value
  var check = document.getElementById('publicoeducacion');
  var checked = check.checked;
  if (checked) {
    secpublica.map((point) => {
      colonias2.map((point1) => {
        distance = map.distance([point1.lat, point1.long], [point.latitud, point.longitud])
        if (distance <= radius) {
          markersecpub = L.marker([point.latitud, point.longitud], { icon: marcadorSecundariasPub }).addTo(map)
          paradas.map((punto) => {
            punto.features.map((punto2) => {
              distance2 = map.distance([punto2.geometry.coordinates[1], punto2.geometry.coordinates[0]], [point.latitud, point.longitud]);
              if (distance2 <= 200) {
                rutas2.push(punto2.properties.route_ids);
              }
            })
          })
          let single = [].concat(...rutas2);
          const dataArr = new Set(single);
          let result = [...dataArr];
          markersecpub.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel + '<br>' + result).openPopup()
          markersecundariapub.push(markersecpub)
        }
      })
    })
  } else {
    markersecundariapub.map((point) => {
      map.removeLayer(point);
    })

  }
}

function prepapriv() {
  const radius = document.getElementById('radioeducacion').value
  var check = document.getElementById('privadoeducacion');
  var checked = check.checked;
  if (checked) {
    prepaprivada.map((point) => {
      colonias2.map((point1) => {
        distance = map.distance([point1.lat, point1.long], [point.latitud, point.longitud])
        if (distance <= radius) {

          markerprepap = L.marker([point.latitud, point.longitud], { icon: marcadorPreparatorias }).addTo(map)
          paradas.map((punto) => {
            punto.features.map((punto2) => {
              distance2 = map.distance([punto2.geometry.coordinates[1], punto2.geometry.coordinates[0]], [point.latitud, point.longitud]);
              if (distance2 <= 200) {
                rutas2.push(punto2.properties.route_ids);
              }
            })
          })
          let single = [].concat(...rutas2);
          const dataArr = new Set(single);
          let result = [...dataArr];
          markerprepap.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel + '<br>' + result).openPopup()
          markerpreparatoriapriv.push(markerprepap)
        }
      })
    })
  } else {
    markerpreparatoriapriv.map((point) => {
      map.removeLayer(point);
    })

  }
}

function prepapub() {
  const radius = document.getElementById('radioeducacion').value
  var check = document.getElementById('publicoeducacion');
  var checked = check.checked;
  if (checked) {
    prepapublica.map((point) => {
      colonias2.map((point1) => {
        distance = map.distance([point1.lat, point1.long], [point.latitud, point.longitud])
        if (distance <= radius) {
          markerprepapub = L.marker([point.latitud, point.longitud], { icon: marcadorPreparatoriasPub }).addTo(map)
          paradas.map((punto) => {
            punto.features.map((punto2) => {
              distance2 = map.distance([punto2.geometry.coordinates[1], punto2.geometry.coordinates[0]], [point.latitud, point.longitud]);
              if (distance2 <= 200) {
                rutas2.push(punto2.properties.route_ids);
              }
            })
          })
          let single = [].concat(...rutas2);
          const dataArr = new Set(single);
          let result = [...dataArr];
          markerprepapub.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel + '<br>' + result).openPopup()
          markerpreparatoriapub.push(markerprepapub)
        }
      })
    })
  } else {
    markerpreparatoriapub.map((point) => {
      map.removeLayer(point);
    })

  }
}

function unipriv() {
  const radius = document.getElementById('radioeducacion').value
  var check = document.getElementById('privadoeducacion');
  var checked = check.checked;
  if (checked) {
    uniprivada.map((point) => {
      colonias2.map((point1) => {
        distance = map.distance([point1.lat, point1.long], [point.latitud, point.longitud])
        if (distance <= radius) {
          markerunip = L.marker([point.latitud, point.longitud], { icon: marcadorUniversidades }).addTo(map)
          paradas.map((punto) => {
            punto.features.map((punto2) => {
              distance2 = map.distance([punto2.geometry.coordinates[1], punto2.geometry.coordinates[0]], [point.latitud, point.longitud]);
              if (distance2 <= 200) {
                rutas2.push(punto2.properties.route_ids);
              }
            })
          })
          let single = [].concat(...rutas2);
          const dataArr = new Set(single);
          let result = [...dataArr];
          markerunip.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel + '<br>' + result).openPopup()
          markeruniversidadpriv.push(markerunip)
        }
      })
    })
  } else {
    markeruniversidadpriv.map((point) => {
      map.removeLayer(point);
    })

  }
}

function unipub() {
  const radius = document.getElementById('radioeducacion').value
  var check = document.getElementById('publicoeducacion');
  var checked = check.checked;
  if (checked) {
    unipublica.map((point) => {
      colonias2.map((point1) => {
        distance = map.distance([point1.lat, point1.long], [point.latitud, point.longitud])
        if (distance <= radius) {
          markerunipub = L.marker([point.latitud, point.longitud], { icon: marcadorUniversidadesPub }).addTo(map)
          paradas.map((punto) => {
            punto.features.map((punto2) => {
              distance2 = map.distance([punto2.geometry.coordinates[1], punto2.geometry.coordinates[0]], [point.latitud, point.longitud]);
              if (distance2 <= 200) {
                rutas2.push(punto2.properties.route_ids);
              }
            })
          })
          let single = [].concat(...rutas2);
          const dataArr = new Set(single);
          let result = [...dataArr];
          markerunipub.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel + '<br>' + result).openPopup()
          markeruniversidadpub.push(markerunipub)
        }
      })
    })
  } else {
    markeruniversidadpub.map((point) => {
      map.removeLayer(point);
    })

  }
}

//console.table(L)

/*map.on('click', (ev) => {
    if (count==0){
    console.log(ev.layerPoint)
    console.log(ev.latlng)
    latlng = ev.latlng
    const { lat, lng } = latlng 
    
    marker = L.marker([lat, lng]).addTo(map)
    console.log('Pasa')
    count++
    }
    console.log(count);
})*/

function Salud() {
  var check = document.getElementById('Hospital');
  var check2 = document.getElementById('Clinica');
  var check3 = document.getElementById('Consultorio');
  var checked = check.checked;
  var checked2 = check2.checked;
  var checked3 = check3.checked;

  if (checked || checked2 || checked3) {
    document.getElementById("publicosalud").removeAttribute('disabled');
    document.getElementById("privadosalud").removeAttribute('disabled');
  } else {
    document.getElementById("publicosalud").setAttribute('disabled', 'disabled');
    document.getElementById("privadosalud").setAttribute('disabled', 'disabled');
  }
}

function Educacion() {
  var check = document.getElementById('Preescolar');
  var check2 = document.getElementById('Primaria');
  var check3 = document.getElementById('Secundaria');
  var check4 = document.getElementById('Preparatoria');
  var check5 = document.getElementById('Universidad');
  var checked = check.checked;
  var checked2 = check2.checked;
  var checked3 = check3.checked;
  var checked4 = check4.checked;
  var checked5 = check5.checked;

  if (checked || checked2 || checked3 || checked4 || checked5) {
    document.getElementById("publicoeducacion").removeAttribute('disabled');
    document.getElementById("privadoeducacion").removeAttribute('disabled');
  } else {
    document.getElementById("publicoeducacion").setAttribute('disabled', 'disabled');
    document.getElementById("privadoeducacion").setAttribute('disabled', 'disabled');
  }
}

function PrivadoSalud() {
  var check = document.getElementById('Hospital');
  var check2 = document.getElementById('Clinica');
  var check3 = document.getElementById('Consultorio');
  var checked = check.checked;
  var checked2 = check2.checked;
  var checked3 = check3.checked;
  if (checked) {
    hospitalpriv()
  }
  if (checked2) {
    clinicapriv()
  }
  if (checked3) {
    consultpriv()
  }
}

function PublicoSalud() {
  var check = document.getElementById('Hospital');
  var check2 = document.getElementById('Clinica');
  var check3 = document.getElementById('Consultorio');
  var checked = check.checked;
  var checked2 = check2.checked;
  var checked3 = check3.checked;
  if (checked) {
    hospitalpub()
  }
  if (checked2) {
    clinicapub()
  }
  if (checked3) {
    consultpub()
  }
}

function PrivadoEducacion() {
  var check = document.getElementById('Preescolar');
  var check2 = document.getElementById('Primaria');
  var check3 = document.getElementById('Secundaria');
  var check4 = document.getElementById('Preparatoria');
  var check5 = document.getElementById('Universidad');
  var checked = check.checked;
  var checked2 = check2.checked;
  var checked3 = check3.checked;
  var checked4 = check4.checked;
  var checked5 = check5.checked;
  if (checked) {
    preepriv()
  }
  if (checked2) {
    primpriv()
  }
  if (checked3) {
    secpriv()
  }
  if (checked4) {
    prepapriv()
  }
  if (checked5) {
    unipriv()
  }
}

function PublicoEducacion() {
  var check = document.getElementById('Preescolar');
  var check2 = document.getElementById('Primaria');
  var check3 = document.getElementById('Secundaria');
  var check4 = document.getElementById('Preparatoria');
  var check5 = document.getElementById('Universidad');
  var checked = check.checked;
  var checked2 = check2.checked;
  var checked3 = check3.checked;
  var checked4 = check4.checked;
  var checked5 = check5.checked;
  if (checked) {
    preepub()
  }
  if (checked2) {
    primpub()
  }
  if (checked3) {
    secpub()
  }
  if (checked4) {
    prepapub()
  }
  if (checked5) {
    unipub()
  }
}

function radiosalud() {
  const radius = document.getElementById('radiosalud').value
  markercolonias.map((point) => {

    L.circle(point._latlng, { color: 'hotpink', fillColor: 'palevioletred', fillOpacity: 0.5, radius: radius }).addTo(map)

  })
}
function radioeducacion() {
  const radius = document.getElementById('radioeducacion').value
  markercolonias.map((point) => {

    L.circle(point._latlng, { color: 'DarkSlateBlue', fillColor: 'MediumSlateBlue', fillOpacity: 0.5, radius: radius }).addTo(map)

  })
}

document.getElementById('deleg').addEventListener('change', function (e) {

  let coords = e.target.value.split(",")
  map.flyTo(coords, 15)
  markercolonias.map((point) => {
    map.removeLayer(point);
  })
  markercolonias.length = 0;
  colonias2.length = 0;
  var combo = document.getElementById("deleg");
  var selected = combo.options[combo.selectedIndex].text;
  colonias1.map((point) => {
    if (selected == point.alcaldia) {
      marker = L.marker([point.lat, point.long], { icon: marcadorColonias }).addTo(map)
      marker.bindPopup('<b>' + point.nombre + '</b><br>' + point.alcaldia).openPopup()
      markercolonias.push(marker)
      colonias2.push(point)
      
    }
  })
  console.log(colonias2)
})

function datosgenerales() {
  const dataArr = new Set(markerhospitalpriv);
  let result = [...dataArr];
  console.log(result)
  const radius = document.getElementById('radiosalud').value
  const radius2 = document.getElementById('radioeducacion').value
  var combo = document.getElementById("deleg");
  var selected = combo.options[combo.selectedIndex].text;
  infogeneralsalud.push({ "alcaldia": selected, "radio": radius, "hospitalesprivados": markerhospitalpriv.length, "hospitalespublicos": markerhospitalpub.length, "consultoriosprivados": markerconsultpriv.length, "consultoriospublicos": markerconsultpub.length, "clinicasprivadas": markerclinicapriv.length, "clinicaspublicas": markerclinicapub.length })

  infogeneraleducacion.push({ "alcaldia": selected, "radio": radius2, "preescolarprivados": markerpreescolarpriv.length, "preescolarpublicos": markerpreescolarpub.length, "primariasprivadas": markerprimariapriv.length, "primariaspublicas": markerprimariapub.length, "secundariasprivadas": markersecundariapriv.length, "secundariaspublicas": markersecundariapub.length, "preparatoriasprivadas": markerpreparatoriapriv.length, "preparatoriaspublicas": markerpreparatoriapub.length, "universidadespublicas": markeruniversidadpub.length, "universidadesprivadas": markeruniversidadpriv.length })
  console.log(infogeneraleducacion)
  guardararchivo()
}

function guardararchivo() {

  fetch('/creararchivosalud', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(infogeneralsalud)
  }).then(res => console.log('archivo creado')).catch(err => console.log(err))

  fetch('/creararchivoeducacion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(infogeneraleducacion)
  }).then(res => console.log('archivo creado')).catch(err => console.log(err))
}
