function ir() {
    const frominput = document.getElementById('buscador_1');
    const toinput = document.getElementById('buscador_2');

    const valFrom = frominput.value;
    const valTo = toinput.value;

    urlcom = 'resultados.html?from=' + valFrom + '&to=' + valTo;
    console.log(urlcom) 
    window.location.href = urlcom;
}