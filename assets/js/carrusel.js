// Creo la biblioteca de imagenes con sus definiciones 
let imagenes = [
   {
        "url": "assets/img/ico/capillatermi.webp",
        "nombre": "BMW Serie 1",
        "descripcion": "El BMW Serie 1 es un compacto premium, reconocido por su dinámica de conducción, diseño deportivo y tecnología innovadora. Se ofrece en versiones de 3 y 5 puertas, con una amplia gama de motores de gasolina y diésel."
    },
    {
        "url": "assets/img/ico/CarcorUrbano1.jpeg",
        "nombre": "BMW X3", 
        "descripcion": "El BMW X3 es un SUV compacto de lujo, producido por BMW desde 2003. Es conocido por su manejo deportivo, su interior lujoso y su diseño distintivo. Se ofrece en diversas variantes de motor, incluyendo gasolina y diésel, y en versiones con tracción trasera o total."
    },
    {
        "url": "assets/img/ico/tamse.jpeg",
        "nombre": "BMW XM", 
        "descripcion": "El BMW XM es un SUV de lujo híbrido enchufable. Se caracteriza por su potente motor V8 TwinPower Turbo de 4,4 litros, combinado con un motor eléctrico, para ofrecer una experiencia de conducción de alto rendimiento."
    },
    {
        "url": "assets/img/ico/terminalCarlosPaz.webp",
        "nombre": "BMW Z4", 
        "descripcion": "El BMW Z4 es un roadster deportivo de dos plazas, conocido por su diseño elegante y su potente rendimiento. Se caracteriza por su tracción trasera, transmisión automática de ocho velocidades o manual de seis, y diferentes opciones de motor de gasolina."
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

