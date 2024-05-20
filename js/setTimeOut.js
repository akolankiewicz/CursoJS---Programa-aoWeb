function ativarContagem(){
    document.getElementById('id1').innerHTML = 'Começou a contar';
    tempo = setTimeout(function (){
        document.getElementById('id1').innerHTML = 'Terminou'
    }, 5000); // em milisegungo, portanto 1000 mls = 1s
}
function pararTempo(){
    clearTimeout(tempo)
    document.getElementById('id1').innerHTML = 'Contagem Parada'
}