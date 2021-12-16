var musicas = [
    { nome: 'Forest', autor: 'Brian Bolger', src: '/assets/audios/Dead Forest - Brian Bolger.mp3', capa: 'assets/images/capas/capa-1.jpg'},
    { nome: 'Floatin Home', autor: 'Brian Bolger', src: '/assets/audios/Floating Home - Brian Bolger.mp3', capa: 'assets/images/capas/capa-2.jpg'},
    { nome: 'Black Mass', autor: 'Brian Bolger', src: '/assets/audios/Black Mass - Brian Bolger.mp3', capa: 'assets/images/capas/capa-3.jpg'},
]

let audio = document.getElementById('audio')
var i = 0;
onload = mudarFaixa(i);




function playPause(element){

    if (audio.paused) {
        audio.play();
        element.src = 'assets/images/controles/btn-pause.png'
    }else{
        audio.pause();
        element.src = 'assets/images/controles/btn-play.png'
    };
}

function mudarFaixa(index){
    let capa = document.getElementById('capa')
    let nomeMusica = document.getElementById('nomeMusica');
    let playPause = document.getElementById('playPause');
    playPause.src = 'assets/images/controles/btn-play.png';

    capa.src = musicas[index].capa;

    audio.src = musicas[index].src;

    nomeMusica.innerHTML = musicas[index].nome + ' -  ' + musicas[index].autor;
}

function proximo(){
    if(i < 2){
        i++;
    }else{
        i = 0;
    };
    mudarFaixa(i);
};

function anterior(){
    if(i > 0){
        i--;
    }else{
        i = (musicas.length -1)
    }
    mudarFaixa(i);
};

