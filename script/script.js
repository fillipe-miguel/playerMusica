var musicas = [
    // {nome: '', autor: '', src: '', capa: ''}
    { nome: 'Forest', autor: 'Brian Bolger', src: '/assets/audios/Dead Forest - Brian Bolger.mp3', capa: '../assets/images/capas/capa-1.jpg'},
    { nome: 'Floatin Home', autor: 'Brian Bolger', src: '/assets/audios/Floating Home - Brian Bolger.mp3', capa: '../assets/images/capas/capa-2.jpg'},
    { nome: 'Black Mass', autor: 'Brian Bolger', src: '/assets/audios/Black Mass - Brian Bolger.mp3', capa: '../assets/images/capas/capa-3.jpg'},
    { nome: 'Malvadão 3', autor: 'Xamã', src: 'assets/audios/Malvadão 3 - Xamã.mp3', capa: 'assets/images/capas/capa-malvadao3.jpg'},
    { nome: 'Enemy', autor: 'Imagine Dragons X J.I.D', src: 'assets/audios/Enemy - Imagine Dragons x J.I.D.mp3', capa: 'assets/images/capas/capa-enemy.jpg'},
    { nome: 'Human', autor: "Rag'n'Bone Man", src: "assets/audios/Human - Rag'n'Bone Man.mp3", capa: 'assets/images/capas/capa-human.jpg'}
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
    let nomeMusica = document.getElementById('nomeMusica');
    let playPause = document.getElementById('playPause');
    playPause.src = 'assets/images/controles/btn-play.png';

    audio.src = musicas[index].src;

    nomeMusica.innerHTML = musicas[index].nome + ' -  ' + musicas[index].autor;

    // Daqui para baixo é um teste!
    let body = document.getElementsByTagName('body');
    // Gambiarra monster para mudar o bkground do body;
    body[0].style.backgroundImage ='url(' + musicas[index].capa + ')';
}

function proximo(){
    if(i < (musicas.length -1)){
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

function showList(){
    let list = document.getElementById('music-list');
    
    if(list.style.visibility == 'hidden'){
        list.style.visibility = 'visible'
    }else{
        list.style.visibility = 'hidden'
    };
}

