// user glocate  pass SRQncgBTq9I5kLjq



//var marker, marcador
var markercolonias = [], colonias2 = [], colonias1 = [], escuelas1 = []
var markerconsultpriv = [], markerconsultpriv2 = [], markerhospitalpriv = [], markerhospitalpriv2 = [], markerhospitalpub = [], markerhospitalpub2 = [], markerconsultpub = [], markerconsultpub2 = [], markerclinicapriv = [], markerclinicapriv2 = [], markerclinicapub = [], markerclinicapub2 = [], markerpreescolarpriv = [], markerpreescolarpriv2 = [], markerpreescolarpub = [], markerpreescolarpub2 = [], markerprimariapriv = [], markerprimariapriv2 = [], markerprimariapub = [], markerprimariapub2 = [], markersecundariapriv = [], markersecundariapriv2 = [], markersecundariapub = [], markersecundariapub2 = [], markerpreparatoriapriv = [], markerpreparatoriapriv2 = [], markerpreparatoriapub = [], markerpreparatoriapub2 = [], markeruniversidadpriv = [], markeruniversidadpriv2 = [], markeruniversidadpub2 = [], markeruniversidadpub = []
var markercp, markerhp, markerhpub, markercpub, markerclinp, markerclinpub, markerpreep, markerpreepub, markerprimp, markerprimpub, markersecp, markersecpub, markerprepap, markerprepapub, markerunip, markerunipub
var infogeneralsaludservicios = [], infogeneraleducacionservicios = [], infogeneralsalud = [], infogeneraleducacion = [], infohospitalpriv = [], infohospitalpub = [], infoconsulturiopriv = [], infoconsultoriopub = [], infoclinicapriv = [], infoclinicapub = [], infopreepriv = [], infopreepub = [], infoprimpriv = [], infoprimpub = [], infosecpriv = [], infosecpub = [], infoprepapriv = [], infoprepapub = [], infounipriv = [], infounipub = []
var consultprivado = [], hospitalprivado = [], hospitalpublico = [], consultpublico = [], clinicapublica = [], clinicaprivada = [], preepublico = [], preeprivado = [], primpublica = [], primprivada = [], secpublica = [], secprivada = [], prepaprivada = [], prepapublica = [], uniprivada = [], unipublica = []
let latlng = 0
let i = 0, contador = 0;
var distance, distance2, rutas2 = [], rutasremp = [], radios = [], radio;

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
  markerColor: 'yellow',
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
  markerColor: 'SeaGreen',
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
  markerColor: 'CornflowerBlue',
  iconColor: 'white'
});

var marcadorSecundarias = L.AwesomeMarkers.icon({
  icon: 'school',
  prefix: 'fa',
  markerColor: 'DeepSkyBlue',
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
  markerColor: 'MidnightBlue',
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
  colonias1 = await fetch('http://localhost:3000/obtenerdatoscolonias') // 1
    .then(response => response.json()) // 2
}

hospitalesprivados()
async function hospitalesprivados() {
  hospitalprivado = await fetch('http://localhost:3000/obtenerdatoshospitalprivado') // 1
    .then(response => response.json()) // 2
}

hospitalespublicos()
async function hospitalespublicos() {
  hospitalpublico = await fetch('http://localhost:3000/obtenerdatoshospitalpublico') // 1
    .then(response => response.json()) // 2
}

consultoriosprivados()
async function consultoriosprivados() {
  consultprivado = await fetch('http://localhost:3000/obtenerdatosconsultorioprivado') // 1
    .then(response => response.json()) // 2
}


consultoriospublicos()
async function consultoriospublicos() {
  consultpublico = await fetch('http://localhost:3000/obtenerdatosconsultoriopublico') // 1
    .then(response => response.json()) // 2
}

clinicasprivadas()
async function clinicasprivadas() {
  clinicaprivada = await fetch('http://localhost:3000/obtenerdatosclinicaprivada') // 1
    .then(response => response.json()) // 2
}

clinicaspublicas()
async function clinicaspublicas() {
  clinicapublica = await fetch('http://localhost:3000/obtenerdatosclinicapublica') // 1
    .then(response => response.json()) // 2
}

preescolarprivada()
async function preescolarprivada() {
  preeprivado = await fetch('http://localhost:3000/obtenerdatospreescolarprivada') // 1
    .then(response => response.json()) // 2
}

preescolarpublica()
async function preescolarpublica() {
  preepublico = await fetch('http://localhost:3000/obtenerdatospreescolarpublica') // 1
    .then(response => response.json()) // 2
}

primariaprivada()
async function primariaprivada() {
  primprivada = await fetch('http://localhost:3000/obtenerdatosprimariaprivada') // 1
    .then(response => response.json()) // 2
}

primariapublica()
async function primariapublica() {
  primpublica = await fetch('http://localhost:3000/obtenerdatosprimariapublica') // 1
    .then(response => response.json()) // 2
}

secundariaprivada()
async function secundariaprivada() {
  secprivada = await fetch('http://localhost:3000/obtenerdatossecundariaprivada') // 1
    .then(response => response.json()) // 2
}

secundariapublica()
async function secundariapublica() {
  secpublica = await fetch('http://localhost:3000/obtenerdatossecundariapublica') // 1
    .then(response => response.json()) // 2
}

preparatoriaprivada()
async function preparatoriaprivada() {
  prepaprivada = await fetch('http://localhost:3000/obtenerdatospreparatoriaprivada') // 1
    .then(response => response.json()) // 2
}

preparatoriapublica()
async function preparatoriapublica() {
  prepapublica = await fetch('http://localhost:3000/obtenerdatospreparatoriapublica') // 1
    .then(response => response.json()) // 2
}

universidadprivada()
async function universidadprivada() {
  uniprivada = await fetch('http://localhost:3000/obtenerdatosuniversidadprivada') // 1
    .then(response => response.json()) // 2
}

universidadpublica()
async function universidadpublica() {
  unipublica = await fetch('http://localhost:3000/obtenerdatosuniversidadpublica') // 1
    .then(response => response.json()) // 2
}

// Creacion de Marcadores
function hospitalpriv() {
  const radius = document.getElementById('radiosalud').value
  var check = document.getElementById('privadosalud');
  var checked = check.checked;
  var combo = document.getElementById("deleg");
  var selected = combo.options[combo.selectedIndex].text;

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
          markerhp.bindPopup(('<b>' + point.nombre + '</b><br>' + point.nivel), estilopopup).openPopup()
          markerhospitalpriv.push(markerhp)
          markerhospitalpriv2.push(markerhp)
          infogeneralsaludservicios.push({"alcaldia": selected,"id_colonia": point1.id, "colonia": point1.nombre, "radio" : radius, "tipo" : point.tipo, "nivel": point.nivel, "id_unidad": point.id, "nombre_unidad": point.nombre, "distancia": Math.round(distance)})
        }
      })

      infohospitalpriv.push(markerhospitalpriv2.length)
    })
  } else {
    markerhospitalpriv.map((point) => {
      map.removeLayer(point);
    })
  }
}


function hospitalpub() {
  var combo = document.getElementById("deleg");
  var selected = combo.options[combo.selectedIndex].text;
  const radius = document.getElementById('radiosalud').value
  var check = document.getElementById('publicosalud');
  var checked = check.checked;
  if (checked) {
    colonias2.map((point1) => {
      markerhospitalpub2.length = 0;
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
          markerhpub.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel).openPopup()
          markerhospitalpub.push(markerhpub)
          markerhospitalpub2.push(markerhpub)
          infogeneralsaludservicios.push({"alcaldia": selected,"id_colonia": point1.id, "colonia": point1.nombre, "radio" : radius, "tipo" : point.tipo, "nivel": point.nivel, "id_unidad": point.id, "nombre_unidad": point.nombre, "distancia": Math.round(distance)})
        }
      })
      infohospitalpub.push(markerhospitalpub2.length)
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
  var combo = document.getElementById("deleg");
  var selected = combo.options[combo.selectedIndex].text;
  var checked = check.checked;
  if (checked) {
    colonias2.map((point1) => {
      markerconsultpriv2.length = 0;
      consultprivado.map((point) => {
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
          markercp.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel).openPopup()
          markerconsultpriv.push(markercp)
          markerconsultpriv2.push(markercp)
          infogeneralsaludservicios.push({"alcaldia":selected,"id_colonia": point1.id, "colonia": point1.nombre, "radio" : radius, "tipo" : point.tipo, "nivel": point.nivel, "id_unidad": point.id, "nombre_unidad": point.nombre, "distancia": Math.round(distance)})
        }
      })
      infoconsulturiopriv.push(markerconsultpriv2.length)
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
  var combo = document.getElementById("deleg");
  var selected = combo.options[combo.selectedIndex].text;
  if (checked) {
    colonias2.map((point1) => {
      markerconsultpub2.length = 0;
      consultpublico.map((point) => {
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
          markercpub.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel).openPopup()
          markerconsultpub.push(markercp)
          markerconsultpub2.push(markercp)
          infogeneralsaludservicios.push({"alcaldia": selected,"id_colonia": point1.id, "colonia": point1.nombre, "radio" : radius, "tipo" : point.tipo, "nivel": point.nivel, "id_unidad": point.id, "nombre_unidad": point.nombre, "distancia": Math.round(distance)})
        }
      })
      infoconsultoriopub.push(markerconsultpub2.length)
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
  var combo = document.getElementById("deleg");
  var selected = combo.options[combo.selectedIndex].text;
  if (checked) {
    colonias2.map((point1) => {
      markerclinicapriv2.length = 0;
      clinicaprivada.map((point) => {
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
          markerclinp.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel).openPopup()
          markerclinicapriv.push(markerclinp)
          markerclinicapriv2.push(markerclinp)
          infogeneralsaludservicios.push({"alcaldia": selected,"id_colonia": point1.id, "colonia": point1.nombre, "radio" : radius, "tipo" : point.tipo, "nivel": point.nivel, "id_unidad": point.id, "nombre_unidad": point.nombre, "distancia": Math.round(distance)})
        }
      })
      infoclinicapriv.push(markerclinicapriv2.length)
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
  var combo = document.getElementById("deleg");
  var selected = combo.options[combo.selectedIndex].text;
  if (checked) {
    colonias2.map((point1) => {
      clinicapublica.map((point) => {
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
          markerclinpub.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel).openPopup()
          markerclinicapub.push(markerclinpub)
          markerclinicapub2.push(markerclinpub)
          infogeneralsaludservicios.push({"alcaldia": selected, "id_colonia": point1.id, "colonia": point1.nombre, "radio" : radius, "tipo" : point.tipo, "nivel": point.nivel, "id_unidad": point.id, "nombre_unidad": point.nombre, "distancia": Math.round(distance)})
        }
      })
      infoclinicapub.push(markerclinicapub2.length)
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
  var combo = document.getElementById("deleg");
  var selected = combo.options[combo.selectedIndex].text;
  if (checked) {
    colonias2.map((point1) => {
      markerpreescolarpriv2.length = 0;
      preeprivado.map((point) => {
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
          markerpreep.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel).openPopup()
          markerpreescolarpriv.push(markerpreep)
          markerpreescolarpriv2.push(markerpreep)
          infogeneraleducacionservicios.push({"alcaldia": selected, "id_colonia": point1.id, "colonia": point1.nombre, "radio" : radius, "tipo" : point.tipo, "nivel": point.nivel, "id_unidad": point.id, "nombre_unidad": point.nombre, "distancia": Math.round(distance)})
        }
      })
      infopreepriv.push(markerpreescolarpriv2.length)
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
  var combo = document.getElementById("deleg");
  var selected = combo.options[combo.selectedIndex].text;
  if (checked) {
    colonias2.map((point1) => {
      markerpreescolarpub2.length = 0;
      preepublico.map((point) => {
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
          markerpreepub.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel).openPopup()
          markerpreescolarpub.push(markerpreepub)
          markerpreescolarpub2.push(markerpreepub)
          infogeneraleducacionservicios.push({"alcadia": selected,"id_colonia": point1.id, "colonia": point1.nombre, "radio" : radius, "tipo" : point.tipo, "nivel": point.nivel, "id_unidad": point.id, "nombre_unidad": point.nombre, "distancia": Math.round(distance)})
        }
      })
      infopreepub.push(markerpreescolarpub2.length)
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
  var combo = document.getElementById("deleg");
  var selected = combo.options[combo.selectedIndex].text;
  if (checked) {
    colonias2.map((point1) => {
      markerprimariapriv2.length = 0;
      primprivada.map((point) => {
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
          markerprimp.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel).openPopup()
          markerprimariapriv.push(markerprimp)
          markerprimariapriv.push(markerprimp)
          infogeneraleducacionservicios.push({"alcaldia": selected,"id_colonia": point1.id, "colonia": point1.nombre, "radio" : radius, "tipo" : point.tipo, "nivel": point.nivel, "id_unidad": point.id, "nombre_unidad": point.nombre, "distancia": Math.round(distance)})
        }
      })
      infoprimpriv.push(markerprimariapriv2.length)
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
  var combo = document.getElementById("deleg");
  var selected = combo.options[combo.selectedIndex].text;
  if (checked) {
    colonias2.map((point1) => {
      markerprimariapub2.length = 0;
      primpublica.map((point) => {
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
          markerprimpub.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel).openPopup()
          markerprimariapub.push(markerprimpub)
          markerprimariapub2.push(markerprimpub)
          infogeneraleducacionservicios.push({"alcaldia": selected ,"id_colonia": point1.id, "colonia": point1.nombre, "radio" : radius, "tipo" : point.tipo, "nivel": point.nivel, "id_unidad": point.id, "nombre_unidad": point.nombre, "distancia": Math.round(distance)})
        }
      })
      infoprimpriv.push(markerprimariapub2.length)
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
  var combo = document.getElementById("deleg");
  var selected = combo.options[combo.selectedIndex].text;
  if (checked) {
    colonias2.map((point1) => {
      markersecundariapriv2.length = 0;
      secprivada.map((point) => {
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
          markersecp.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel).openPopup()
          markersecundariapriv.push(markersecp)
          markersecundariapriv2.push(markersecp)
          infogeneraleducacionservicios.push({"alcaldia": selected,"id_colonia": point1.id, "colonia": point1.nombre, "radio" : radius, "tipo" : point.tipo, "nivel": point.nivel, "id_unidad": point.id, "nombre_unidad": point.nombre, "distancia": Math.round(distance)})
        }
      })
      infosecpriv.push(markersecundariapriv2.length)
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
  var combo = document.getElementById("deleg");
  var selected = combo.options[combo.selectedIndex].text;
  if (checked) {
    colonias2.map((point1) => {
      markersecundariapub2.length = 0;
      secpublica.map((point) => {
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
          markersecpub.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel).openPopup()
          markersecundariapub.push(markersecpub)
          markersecundariapub2.push(markersecpub)
          infogeneraleducacionservicios.push({"alcaldia": selected,"id_colonia": point1.id, "colonia": point1.nombre, "radio" : radius, "tipo" : point.tipo, "nivel": point.nivel, "id_unidad": point.id, "nombre_unidad": point.nombre, "distancia": Math.round(distance)})
        }
      })
      infosecpub.push(markersecundariapub2.length)
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
  var combo = document.getElementById("deleg");
  var selected = combo.options[combo.selectedIndex].text;
  if (checked) {
    colonias2.map((point1) => {
      markerpreparatoriapriv2.length = 0;
      prepaprivada.map((point) => {
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
          markerprepap.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel).openPopup()
          markerpreparatoriapriv.push(markerprepap)
          markerpreparatoriapriv2.push(markerprepap)
          infogeneraleducacionservicios.push({"alcaldia": selected,"id_colonia": point1.id, "colonia": point1.nombre, "radio" : radius, "tipo" : point.tipo, "nivel": point.nivel, "id_unidad": point.id, "nombre_unidad": point.nombre, "distancia": Math.round(distance)})
        }
      })
      infoprepapriv.push(markerpreparatoriapriv2.length)
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
  var combo = document.getElementById("deleg");
  var selected = combo.options[combo.selectedIndex].text;
  if (checked) {
    colonias2.map((point1) => {
      markerpreparatoriapub2.length = 0;
      prepapublica.map((point) => {
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
          markerprepapub.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel).openPopup()
          markerpreparatoriapub.push(markerprepapub)
          markerpreparatoriapub2.push(markerprepapub)
          infogeneraleducacionservicios.push({"alcaldia": selected,"id_colonia": point1.id, "colonia": point1.nombre, "radio" : radius, "tipo" : point.tipo, "nivel": point.nivel, "id_unidad": point.id, "nombre_unidad": point.nombre, "distancia": Math.round(distance)})
        }
      })
      infoprepapub.push(markerpreparatoriapub2.length)
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
  var combo = document.getElementById("deleg");
  var selected = combo.options[combo.selectedIndex].text;
  if (checked) {
    colonias2.map((point1) => {
      markeruniversidadpriv2.length = 0;
      uniprivada.map((point) => {
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
          markerunip.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel).openPopup()
          markeruniversidadpriv.push(markerunip)
          markeruniversidadpriv2.push(markerunip)
          infogeneraleducacionservicios.push({"alcaldia": selected,"id_colonia": point1.id, "colonia": point1.nombre, "radio" : radius, "tipo" : point.tipo, "nivel": point.nivel, "id_unidad": point.id, "nombre_unidad": point.nombre, "distancia": Math.round(distance)})
        }
      })
      infounipriv.push(markeruniversidadpriv2.length)
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
  var combo = document.getElementById("deleg");
  var selected = combo.options[combo.selectedIndex].text;
  if (checked) {
    colonias2.map((point1) => {
      markeruniversidadpub2.length = 0;
      unipublica.map((point) => {
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
          markerunipub.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel).openPopup()
          markeruniversidadpub.push(markerunipub)
          markeruniversidadpub2.push(markerunipub)
          infogeneraleducacionservicios.push({"alcaldia": selected,"id_colonia": point1.id, "colonia": point1.nombre, "radio" : radius, "tipo" : point.tipo, "nivel": point.nivel, "id_unidad": point.id, "nombre_unidad": point.nombre, "distancia": Math.round(distance)})
        }
      })
      infounipub.push(markeruniversidadpub2.length)
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

    radio = L.circle(point._latlng, { color: 'hotpink', fillColor: 'palevioletred', fillOpacity: 0.5, radius: radius }).addTo(map)
    radios.push(radio)
  })
}
function radioeducacion() {
  const radius = document.getElementById('radioeducacion').value
  markercolonias.map((point) => {

    radio = L.circle(point._latlng, { color: 'DarkSlateBlue', fillColor: 'MediumSlateBlue', fillOpacity: 0.5, radius: radius }).addTo(map)
    radios.push(radio)

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

  const radius = document.getElementById('radiosalud').value
  const radius2 = document.getElementById('radioeducacion').value
  var combo = document.getElementById("deleg");
  var selected = combo.options[combo.selectedIndex].text;

  colonias2.map((point) => {
    infogeneralsalud.push({ "alcaldia": selected, "radio": radius, "id_colonia": point.id, "colonia": point.nombre, "hospitalesprivados": infohospitalpriv[contador], "hospitalespublicos": infohospitalpub[contador], "consultoriosprivados": infoconsulturiopriv[contador], "consultoriospublicos": infoconsultoriopub[contador], "clinicasprivadas": infoclinicapriv[contador], "clinicaspublicas": infoclinicapub[contador] })

    infogeneraleducacion.push({ "alcaldia": selected, "radio": radius2, "id_colonia": point.id, "colonia": point.nombre, "preescolarprivados": infopreepriv[contador], "preescolarpublicos": infopreepub[contador], "primariasprivadas": infoprimpriv[contador], "primariaspublicas": infoprimpub[contador], "secundariasprivadas": infosecpriv[contador], "secundariaspublicas": infosecpub[contador], "preparatoriasprivadas": infoprepapriv[contador], "preparatoriaspublicas": infoprepapub[contador], "universidadespublicas": infounipriv[contador], "universidadesprivadas": infounipub[contador] })

    contador++;
  })
  
  console.log(infogeneralsaludservicios)
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

  fetch('/creararchivosaludservicios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(infogeneralsaludservicios)
  }).then(res => console.log('archivo creado')).catch(err => console.log(err))

  fetch('/creararchivoeducacionservicios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(infogeneraleducacionservicios)
  }).then(res => console.log('archivo creado')).catch(err => console.log(err))
}

function limpiar() {
  radios.map((point) => {
    map.removeLayer(point);
  })
  radios.length = 0;
  markercolonias.map((point) => {
    map.removeLayer(point);
  })
  colonias2.length = 0;
  markercolonias.length = 0;
  markerhospitalpriv.map((point) => {
    map.removeLayer(point);
  })
  markerhospitalpriv.length = 0;
  markerhospitalpub.map((point) => {
    map.removeLayer(point);
  })
  markerhospitalpub.length = 0;
  markerconsultpriv.map((point) => {
    map.removeLayer(point);
  })
  markerconsultpriv.length = 0;
  markerconsultpub.map((point) => {
    map.removeLayer(point);
  })
  markerconsultpub.length = 0;
  markerclinicapriv.map((point) => {
    map.removeLayer(point);
  })
  markerclinicapriv.length = 0;
  markerclinicapub.map((point) => {
    map.removeLayer(point);
  })
  markerclinicapub.length = 0;
  markerpreescolarpriv.map((point) => {
    map.removeLayer(point);
  })
  markerpreescolarpriv.length = 0;
  markerpreescolarpub.map((point) => {
    map.removeLayer(point);
  })
  markerpreescolarpub.length = 0;
  markerprimariapriv.map((point) => {
    map.removeLayer(point);
  })
  markerprimariapriv.length = 0;
  markerprimariapub.map((point) => {
    map.removeLayer(point);
  })
  markerprimariapub.length = 0;
  markersecundariapriv.map((point) => {
    map.removeLayer(point);
  })
  markersecundariapriv.length = 0;
  markersecundariapub.map((point) => {
    map.removeLayer(point);
  })
  markersecundariapub.length = 0;
  markerpreparatoriapriv.map((point) => {
    map.removeLayer(point);
  })
  markerpreparatoriapriv.length = 0;
  markerpreparatoriapub.map((point) => {
    map.removeLayer(point);
  })
  markerpreparatoriapub.length = 0;
  markeruniversidadpriv.map((point) => {
    map.removeLayer(point);
  })
  markeruniversidadpriv.length = 0;
  markeruniversidadpub.map((point) => {
    map.removeLayer(point);
  })
  markeruniversidadpub.length = 0;


  infogeneralsalud.length = 0
  infogeneraleducacion.length = 0
  infogeneralsaludservicios.length = 0
  infogeneraleducacionservicios.length = 0
  infohospitalpriv.length = 0
  infohospitalpub.length = 0
  infoconsulturiopriv.length = 0
  infoconsultoriopub.length = 0
  infoclinicapriv.length = 0
  infoclinicapub.length = 0
  infopreepriv.length = 0
  infopreepub.length = 0
  infoprimpriv.length = 0
  infoprimpub.length = 0
  infosecpriv.length = 0
  infosecpub.length = 0
  infoprepapriv.length = 0
  infoprepapub.length = 0
  infounipriv.length = 0
  infounipub.length = 0

  var check = document.getElementById('Hospital');
  var check2 = document.getElementById('Clinica');
  var check3 = document.getElementById('Consultorio');
  var check4 = document.getElementById('Preescolar');
  var check5 = document.getElementById('Primaria');
  var check6 = document.getElementById('Secundaria');
  var check7 = document.getElementById('Preparatoria');
  var check8 = document.getElementById('Universidad');
  var check9 = document.getElementById('privadosalud');
  var check10 = document.getElementById('publicosalud');
  var check11 = document.getElementById('privadoeducacion');
  var check12 = document.getElementById('publicoeducacion');

  check.checked = false
  check2.checked = false
  check3.checked = false
  check4.checked = false
  check5.checked = false
  check6.checked = false
  check7.checked = false
  check8.checked = false
  check9.checked = false
  check10.checked = false
  check11.checked = false
  check12.checked = false

  document.getElementById("radiosalud").value = "";
  document.getElementById("radioeducacion").value = "";
  document.getElementById("publicosalud").setAttribute('disabled', 'disabled');
  document.getElementById("privadosalud").setAttribute('disabled', 'disabled');
  document.getElementById("publicoeducacion").setAttribute('disabled', 'disabled');
  document.getElementById("privadoeducacion").setAttribute('disabled', 'disabled');
}
