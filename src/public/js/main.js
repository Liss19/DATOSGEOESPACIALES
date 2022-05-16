// user glocate  pass SRQncgBTq9I5kLjq

var marker, marcador
var markercolonias = []
var markerconsultpriv = [], markerhospitalpriv = [], markerhospitalpub = [], infohospitalpriv = []
var markercp, markerhp, markerhpub
/*const colonias = [{
  "id": 1,
  "nombre": "LOMAS DE CHAPULTEPEC",
  "lat": 19.42284112,
  "long": -99.21579358,
  "cve_alc": 15,
  "alcaldia": "MIGUEL HIDALGO"
},
{
  "id": 2,
  "nombre": "LOMAS DE REFORMA (LOMAS DE CHAPULTEPEC)",
  "lat": 19.41061589,
  "long": -99.22624873,
  "cve_alc": 15,
  "alcaldia": "MIGUEL HIDALGO"
},
{
  "id": 3,
  "nombre": "DEL BOSQUE (POLANCO)",
  "lat": 19.43421892,
  "long": -99.20940375,
  "cve_alc": 15,
  "alcaldia": "MIGUEL HIDALGO"
},
{
  "id": 4,
  "nombre": "PEDREGAL DE SANTA URSULA I",
  "lat": 19.31486224,
  "long": -99.14779545,
  "cve_alc": 2,
  "alcaldia": "COYOACAN"
},
{
  "id": 5,
  "nombre": "AJUSCO I",
  "lat": 19.32457112,
  "long": -99.15616022,
  "cve_alc": 2,
  "alcaldia": "COYOACAN"
},
{
  "id": 6,
  "nombre": "VISTAS DEL MAUREL (U HAB)",
  "lat": 19.30530037,
  "long": -99.17343059,
  "cve_alc": 2,
  "alcaldia": "COYOACAN"
},
{
  "id": 7,
  "nombre": "IGNACIO ZARAGOZA I",
  "lat": 19.41311197,
  "long": -99.09469923,
  "cve_alc": 16,
  "alcaldia": "VENUSTIANO CARRANZA"
},
{
  "id": 8,
  "nombre": "CENTRO II",
  "lat": 19.42571443,
  "long": -99.12265977,
  "cve_alc": 16,
  "alcaldia": "VENUSTIANO CARRANZA"
},
{
  "id": 9,
  "nombre": "VALENTIN GOMEZ FARIAS",
  "lat": 19.41618441,
  "long": -99.09357531,
  "cve_alc": 16,
  "alcaldia": "VENUSTIANO CARRANZA"
},
{
  "id": 10,
  "nombre": "MORELOS II",
  "lat": 19.44155602,
  "long": -99.11835494,
  "cve_alc": 16,
  "alcaldia": "VENUSTIANO CARRANZA"
},
{
  "id": 11,
  "nombre": "NICOLAS BRAVO",
  "lat": 19.45389814,
  "long": -99.12315335,
  "cve_alc": 16,
  "alcaldia": "VENUSTIANO CARRANZA"
},
{
  "id": 12,
  "nombre": "5 DE MAYO",
  "lat": 19.44845879,
  "long": -99.19990957,
  "cve_alc": 15,
  "alcaldia": "MIGUEL HIDALGO"
},
{
  "id": 13,
  "nombre": "PLUTARCO ELIAS CALLES",
  "lat": 19.45483969,
  "long": -99.16918946,
  "cve_alc": 15,
  "alcaldia": "MIGUEL HIDALGO"
},
{
  "id": 14,
  "nombre": "CAMPESTRE COYOACAN (FRACC)",
  "lat": 19.30882288,
  "long": -99.1170551,
  "cve_alc": 2,
  "alcaldia": "COYOACAN"
},
{
  "id": 15,
  "nombre": "JANITZIO",
  "lat": 19.44750725,
  "long": -99.11743224,
  "cve_alc": 16,
  "alcaldia": "VENUSTIANO CARRANZA"
}]*/
const consultprivado = [{
  "id": 1,
  "nombre": "ACERCATE FEM",
  "nivel": "Consultorios de medicina general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.47645897,
  "longitud": -99.14305386
},
{
  "id": 2,
  "nombre": "ACUPUNTURA CHINA",
  "nivel": "Consultorios de medicina general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.28887655,
  "longitud": -99.12626488
},
{
  "id": 3,
  "nombre": "ADMINISTRACION CONSULTORIOS TORRE 3",
  "nivel": "Consultorios de medicina general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.29651061,
  "longitud": -99.1605306
},
{
  "id": 4,
  "nombre": "ADN MEDICA PHARMA",
  "nivel": "Consultorios de medicina general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.38014385,
  "longitud": -99.24347078
},
{
  "id": 5,
  "nombre": "AEROMEDICINA INTEGRAL CDMX",
  "nivel": "Consultorios de medicina general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.41629363,
  "longitud": -99.08553318
},
{
  "id": 6,
  "nombre": "AFEECI",
  "nivel": "Consultorios de medicina general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.40063538,
  "longitud": -99.18696167
},
{
  "id": 7,
  "nombre": "ALBERTO SANCHEZ GARCIA",
  "nivel": "Consultorios de medicina general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.49407512,
  "longitud": -99.12732537
}]

const hospitalprivado = [{
  "id": 3422,
  "nombre": "CLINICA HOSPITAL LUIS PASTEUR",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.49605313,
  "longitud": -99.09120967
},
{
  "id": 3423,
  "nombre": "CLINICA LONDRES",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.42179268,
  "longitud": -99.15696791
},
{
  "id": 3424,
  "nombre": "CLINICA MADRE TERESA DUE�AS AC",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.333847,
  "longitud": -99.23395646
},
{
  "id": 3425,
  "nombre": "CLINICA MEDICA EDYBE",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.42226356,
  "longitud": -99.11201421
},
{
  "id": 3426,
  "nombre": "CLINICA MEDICA HUMANITAL",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.25711785,
  "longitud": -99.10995307
},
{
  "id": 3427,
  "nombre": "CLINICA MEDICA PAOLA",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.30744788,
  "longitud": -99.08440588
},
{
  "id": 3428,
  "nombre": "CLINICA MEDICA SANTA ROSA.",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.40422096,
  "longitud": -99.05788504
},
{
  "id": 3429,
  "nombre": "CLINICA MEDICA UMI",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.42032062,
  "longitud": -99.15323163
},
{
  "id": 3430,
  "nombre": "CLINICA NUESTRA SE�ORA DEL CARMEN",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.4814988,
  "longitud": -99.18919324
},
{
  "id": 3431,
  "nombre": "CLINICA ORIENTAL",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.39494972,
  "longitud": -99.07063605
},
{
  "id": 3432,
  "nombre": "CLINICA RECREA MEDICINA REPRODUCTIVA",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.49227842,
  "longitud": -99.13209495
},
{
  "id": 3433,
  "nombre": "CORPORATIVO JARDIN",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.42178743,
  "longitud": -99.10688948
},
{
  "id": 3434,
  "nombre": "CRUZ ROJA MEXICANA",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.43853255,
  "longitud": -99.20892246
},
{
  "id": 3435,
  "nombre": "DIRECCION Y ADMINISTRACION DE SERVICIOS MEDICOS GMT",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.37251078,
  "longitud": -99.17504129
},
{
  "id": 3436,
  "nombre": "ECOFEM",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.34888508,
  "longitud": -99.01568911
},
{
  "id": 3437,
  "nombre": "FARMA ATENCION MEDICA",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.28659379,
  "longitud": -99.1750994
},
{
  "id": 3438,
  "nombre": "GRUPO MEDICO PEDIATRICO",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.42411082,
  "longitud": -99.20544055
},
{
  "id": 3439,
  "nombre": "GRUPO MEDICO SANTISIMA TRINIDAD",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.32656872,
  "longitud": -99.07532174
},
{
  "id": 3440,
  "nombre": "HOSPITAL ABC",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.40027825,
  "longitud": -99.20434683
},
{
  "id": 3441,
  "nombre": "HOSPITAL ABC",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.35827571,
  "longitud": -99.28263355
},
{
  "id": 3442,
  "nombre": "HOSPITAL ALERTA MEDICA INTERNACIONAL",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.39220331,
  "longitud": -99.18386873
},
{
  "id": 3443,
  "nombre": "HOSPITAL ANGELES ACOXPA",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.29774935,
  "longitud": -99.13751185
},
{
  "id": 3444,
  "nombre": "HOSPITAL ANGELES LINDAVISTA",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.48641045,
  "longitud": -99.12982745
},
{
  "id": 3445,
  "nombre": "HOSPITAL BOUTIQUE RIOBAMBA",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.49509865,
  "longitud": -99.12343819
},
{
  "id": 3446,
  "nombre": "HOSPITAL CAMI",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.42407246,
  "longitud": -99.1049721
},
{
  "id": 3447,
  "nombre": "HOSPITAL CHURUBUSCO",
  "nivel": "Hospital general privado",
  "tipo": "unidad de salud privada",
  "latitud": 19.36157536,
  "longitud": -99.12133398
}]
const hospitalpublico = [{
  "id": 3655,
  "nombre": "UMAE HOSPITAL DE ONCOLOGIA IMSS",
  "nivel": "Hospital general publico",
  "tipo": "unidad de salud publica",
  "latitud": 19.40771842,
  "longitud": -99.1550294
},
{
  "id": 3656,
  "nombre": "UNIDAD DE MEDICINA FAMILIAR 11 PERALVILLO",
  "nivel": "Hospital general publico",
  "tipo": "unidad de salud publica",
  "latitud": 19.46847065,
  "longitud": -99.12986462
},
{
  "id": 3657,
  "nombre": "UNIDAD DE MEDICINA FAMILIAR 31",
  "nivel": "Hospital general publico",
  "tipo": "unidad de salud publica",
  "latitud": 19.35179751,
  "longitud": -99.0771163
},
{
  "id": 3658,
  "nombre": "UNIDAD DE MEDICINA FAMILIAR INSTITUTO MEXICANO DEL SEGURO SOCIAL UMF CON UMAA 162",
  "nivel": "Hospital general publico",
  "tipo": "unidad de salud publica",
  "latitud": 19.30653963,
  "longitud": -99.05946036
},
{
  "id": 3659,
  "nombre": "UNIDAD DE MEDICINA FAMILIAR INTEGRACION LATINOAMERICANA",
  "nivel": "Hospital general publico",
  "tipo": "unidad de salud publica",
  "latitud": 19.33745135,
  "longitud": -99.17862245
},
{
  "id": 3660,
  "nombre": "UNIDAD DE MEDICINA FAMILIAR N. 22",
  "nivel": "Hospital general publico",
  "tipo": "unidad de salud publica",
  "latitud": 19.33123855,
  "longitud": -99.21788916
},
{
  "id": 3661,
  "nombre": "UNIDAD DE MEDICINA FAMILIAR NO 41",
  "nivel": "Hospital general publico",
  "tipo": "unidad de salud publica",
  "latitud": 19.48093408,
  "longitud": -99.13338206
},
{
  "id": 3662,
  "nombre": "UNIDAD DE MEDICINA FAMILIAR NUMERO 43",
  "nivel": "Hospital general publico",
  "tipo": "unidad de salud publica",
  "latitud": 19.35546545,
  "longitud": -99.08509859
},
{
  "id": 3663,
  "nombre": "UNIDAD DE MEDICINA FAMILIAR UMA 42",
  "nivel": "Hospital general publico",
  "tipo": "unidad de salud publica",
  "latitud": 19.36545671,
  "longitud": -99.29283545
},
{
  "id": 3664,
  "nombre": "UNIDAD MEDICA DE ALTA ESPECIALIDAD HOSPITAL DE PEDIATRIA CENTRO MEDICO SIGL",
  "nivel": "Hospital general publico",
  "tipo": "unidad de salud publica",
  "latitud": 19.40665529,
  "longitud": -99.15392067
},
{
  "id": 3665,
  "nombre": "UNIDAD MEDICA DE ALTA ESPECIALIDAD HOSPITAL DE TRAUMATOLOGIA DR VICTORIO DE LA FUENTE NARVAEZ",
  "nivel": "Hospital general publico",
  "tipo": "unidad de salud publica",
  "latitud": 19.48521024,
  "longitud": -99.1370821
},
{
  "id": 3666,
  "nombre": "UNIDAD MEDICA DE LA COMUNIDAD DE TRATAMIENTO ESPECIALIZADO PARA ADOLESCENTES",
  "nivel": "Hospital general publico",
  "tipo": "unidad de salud publica",
  "latitud": 19.29233206,
  "longitud": -99.16788267
},
{
  "id": 3667,
  "nombre": "UNIDAD MEDICA DEL RECLUSORIO PREVENTIDO VARONIL ORIENTE",
  "nivel": "Hospital general publico",
  "tipo": "unidad de salud publica",
  "latitud": 19.32110233,
  "longitud": -99.06880392
},
{
  "id": 3668,
  "nombre": "UNIDAD MEDICA LA COLMENA",
  "nivel": "Hospital general publico",
  "tipo": "unidad de salud publica",
  "latitud": 19.37095951,
  "longitud": -98.99879618
},
{
  "id": 3669,
  "nombre": "UNIDAD MEDICO QUIRURGICA JUAREZ MEXICO",
  "nivel": "Hospital general publico",
  "tipo": "unidad de salud publica",
  "latitud": 19.42517863,
  "longitud": -99.12900742
},
{
  "id": 3670,
  "nombre": "UNIDADES DE SALUD DE DETECCION OPORTUNA UNIDAD MIXCOAC",
  "nivel": "Hospital general publico",
  "tipo": "unidad de salud publica",
  "latitud": 19.37616558,
  "longitud": -99.18760371
}]
let latlng = 0
let i = 0

const map = L.map('map-template').setView([19.42847, -99.12766], 15)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

var marcadorEscuelas = L.AwesomeMarkers.icon({
  icon: 'school',
  prefix: 'fa',
  markerColor: 'red',
  iconColor: 'white'
});
var marcadorHospitales = L.AwesomeMarkers.icon({
  icon: 'hospital',
  prefix: 'fa',
  markerColor: 'green',
  iconColor: 'white'
});

var marcadorColonias = L.AwesomeMarkers.icon({
  icon: 'user',
  prefix: 'fa',
  markerColor: 'black',
  iconColor: 'white'
});
// const travelTimes = [300, 600, 900, 1200, 1500, 1800];
// const center =[19.42847, -99.12766]
// const options = {
//   travelType: 'bike',
//   travelEdgeWeights: travelTimes,
//   maxEdgeWeight: 1800,
//   edgeWeight: 'time',
//   serializer: 'json'
// };
// const sources = [{ id: 0, lat: center[0], lng: center[1] }];

// // Add markers for the sources on the map.
// sources.forEach(source => {
//   L.marker([source.lat, source.lng]).addTo(map)
// });

// // define the polygon overlay
// const polygonOverlayLayer = new tgm.leaflet.TgmLeafletPolygonOverlay({ strokeWidth: 20 });
// polygonOverlayLayer.addTo(map);

// // get the polygons
// const polygons = await client.polygons.fetch(sources, options);
// // calculate bounding box for polygons
// const bounds = polygons.getMaxBounds();
// // add polygons to overlay
// polygonOverlayLayer.setData(polygons);
// // zoom to the polygon bounds
// map.fitBounds(new L.latLngBounds(bounds.northEast, bounds.southWest));

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





function hospitalpriv() {
  const radius = document.getElementById('radio').value
  var check = document.getElementById('hosptpriv');
  var checked = check.checked;
  if (checked) {
    hospitalprivado.map((point) => {
      colonias.map((point1) => {
        distance = map.distance([point1.lat, point1.long], [point.latitud, point.longitud])
        if (distance <= radius) {
          markerhp = L.marker([point.latitud, point.longitud], { icon: marcadorHospitales }).addTo(map)
          markerhp.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel).openPopup()
          markerhospitalpriv.push(markerhp)
          infohospitalpriv.push({ "nombre": point.nombre, "nivel": point.nivel, "tipo": point.tipo, "nombrecolonia": point1.nombre, "alcaldia": point1.alcaldia })
        }
      })
    })
  } else {
    markerhospitalpriv.map((point) => {
      map.removeLayer(point);
    })
    infohospitalpriv.length = 0;

  }
  console.log(infohospitalpriv);
}

function hospitalpub() {
  const radius = document.getElementById('radio').value
  var check = document.getElementById('hosptpub');
  var checked = check.checked;
  if (checked) {
    hospitalpublico.map((point) => {
      colonias.map((point1) => {
        distance = map.distance([point1.lat, point1.long], [point.latitud, point.longitud])
        if (distance <= radius) {
          markerhpub = L.marker([point.latitud, point.longitud], { icon: marcadorHospitales }).addTo(map)
          markerhpub.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel).openPopup()
          markerhospitalpub.push(markerhpub)
        }
      })
      // markerhp=L.marker([point.latitud, point.longitud]).addTo(map)
      // markerhp.bindPopup(point.nombre+'<br> '+point.nivel).openPopup()
      // markerhospitalpriv.push(markerhp)

    })
  } else {
    markerhospitalpub.map((point) => {
      map.removeLayer(point);
    })

  }
}

function consultpriv() {
  const radius = document.getElementById('radio').value
  var check = document.getElementById('consultpriv');
  var checked = check.checked;
  if (checked) {
    consultprivado.map((point) => {
      colonias.map((point1) => {
        distance = map.distance([point1.lat, point1.long], [point.latitud, point.longitud])
        if (distance <= radius) {
          markercp = L.marker([point.latitud, point.longitud]).addTo(map)
          markercp.bindPopup('<b>' + point.nombre + '</b><br>' + point.nivel).openPopup()
          markerconsultpriv.push(markercp)
        }
      })
      // markercp=L.marker([point.latitud, point.longitud]).addTo(map)
      // markercp.bindPopup(point.nombre+'<br> '+point.nivel).openPopup()
      // markerconsultpriv.push(markercp)

    })
  } else {
    markerconsultpriv.map((point) => {
      map.removeLayer(point);
    })

  }
}
console.table(L)

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



function radio() {
  const radius = document.getElementById('radio').value
  colonias.map((point) => {
    const latlng = [point.lat, point.long]
    L.circle(latlng, { color: 'red', fillColor: '#f03', fillOpacity: 0.5, radius: radius }).addTo(map)

  })
}

document.getElementById('deleg').addEventListener('change', function (e) {
  let coords = e.target.value.split(",")
  map.flyTo(coords, 15)

  var combo = document.getElementById("deleg");
  var selected = combo.options[combo.selectedIndex].text;
  colonias.map((point) => {
    if (selected == point.alcaldia) {
      marker = L.marker([point.lat, point.long], { icon: marcadorColonias }).addTo(map)
      marker.bindPopup('<b>' + point.nombre + '</b><br>' + point.alcaldia).openPopup()
      markercolonias.push(marker)
    }
  })

})