// Creo la biblioteca de imagenes con sus definiciones 
let imagenes = [
   {
        "url": "assets/img/ico/capillatermi.webp",
        "nombre": "Terminal de capilla",
        "descripcion": "Es la terminal de omnibus de capilla del monte, aqui llegan los colestivos inter urbanos, como por ejemplo el colectivo sarmiento y el lumasa. es la terminal mas al norte del departamento de punilla."
    },
    {
        "url": "assets/img/ico/terminalCosquin.jpg",
        "nombre": "BMW X3", 
        "descripcion": "Es la terminal de omnibus de cosquin, aqui llegan colectivos inter urbanos, como por ejemplo el colectivo sarmiento, lumasa, calera, urquiza. es la terminal mas al sur del departamento de punilla"
    },
    {
        "url": "assets/img/ico/colectivoC.jpeg",
        "nombre": "BMW XM", 
        "descripcion": "Este es el colectivo C un colectivo urbano que viaja desde villa giardino hasta villa yacoana, pasando por lugars como : La Falda, Huerta Grande y Villa Giardino"
    },
    {
        "url": "assets/img/ico/terminalCarlosPaz.webp",
        "nombre": "BMW Z4", 
        "descripcion": "Es la terminal de omnibus de carlos paz, por aqui pasan la mayotia de las empresas de colectivos ya que desde aqui se realizan los viajes mas largos desde la capital de la provincia hasta viajes inter provinciales."
    }
]

// Creo los botones y los divs 
let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

// Creo los eventos 
atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}

