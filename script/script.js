var musicas = [
    { nome: 'Musica 1', autor: 'Autor 1', src: '/assets/audios/Dead Forest - Brian Bolger.mp3'},
    { nome: 'Musica 2', autor: 'Autor 2', src: '/assets/audios/Floating Home - Brian Bolger.mp3'},
    { nome: 'Musica 3', autor: 'Autor 3', src: '/assets/audios/Black Mass - Brian Bolger.mp3'},
]

let audio = document.getElementById('audio')

function play(){
    audio.play();
}

function pausar(){
    audio.pause();
}





var i = 0;
function proximo(){
    let nomeMusica = document.getElementById('nomeMusica')

    audio.src = musicas[i].src;
    nomeMusica.innerHTML = musicas[i].nome + ' -  ' + musicas[i].autor;
    if(i < 2){
        i++;
    }else{
        i = 0;
    };
}

