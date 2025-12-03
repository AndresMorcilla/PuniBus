async function init() {
  const respuesta = await fetch('assets/js/colectivos.json');
  const data = await respuesta.json();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const from = urlParams.get('from');
  const to = urlParams.get('to');

  let fromelem = document.getElementById('from');
  let toelem = document.getElementById('to');

  fromelem.textContent = from;
  toelem.textContent = to;

  function buscarColectivo(data, from, to) {
    const col = data.colectivo;

    if (col.desde_donde === from && col.a_donde === to) {
      return col;
    }
    return null;
  }

  const resultado = buscarColectivo(data, from, to);
  console.log(resultado);

  const conteneidor = document.getElementById('opcionesresul');

  const nuevoElemento = document.createElement('p');

  nuevoElemento.textContent = resultado.marca + ' ' + resultado.a_donde + ' : ' + resultado.duracion;
  nuevoElemento.setAttribute('class','resultin');

  conteneidor.appendChild(nuevoElemento);
}

init();
