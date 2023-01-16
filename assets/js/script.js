
// VARIÁVEIS 

let ligado = false;

let btnLigar = document.querySelector('.ligar button');




// EVENTOS

// Liga/Desliga o teclado
btnLigar.addEventListener('click', turnOn);


// pega a tecla pressionada
document.body.addEventListener('keydown', e => {

    // Se o teclado estiver ligado, toca a nota
    if (ligado) {
        playNote(e.code.toLocaleLowerCase());
    }

});


// Opção para tocar via touch screen
document.querySelectorAll('div[data-key]').forEach((item) => {

    let note = item.getAttribute('data-key');


    // TOCANDO COM O MOUSE OU POR MEIO DA TELA (TOUCH)
    item.addEventListener('click', e => {

        if(ligado) {
        
             // Se o teclado estiver ligado, toca a nota
            playNote(note);

        }
       
    });


})




// FUNÇÕES

function turnOn() {

    // Tela do teclado
    let screen = document.querySelector('.screen-keyboard');

    if (!ligado) {
        console.log('Ligando...')
        ligado = true;

        screen.style.backgroundColor = '#17A2B8';
        screen.innerHTML = '🎹 Ligado';


    } else {
        console.log('Desligando...')
        ligado = false;
        screen.style.backgroundColor = '#14171A';
        screen.innerHTML = '';
    }



}



function playNote(note) {

    // ${note} é o parâmetro que corresponde ao nome da TECLA pressionada que recebe o mesmo nome do audio.
    // Seleciona o arquivo de áudio conforme tecla pressionada (Elementos de áudio com ID)
    let audioElement = document.querySelector(`#a_${note}`);

    if (audioElement) {
        audioElement.currentTime = 0; // ZERA o áudio sem ele ter terminado de tocar. Permite tocar várias vezes o mesmo som

        // Se encontrado - Toca o som
        audioElement.play();
    }



    // Verifica qual tecla foi pressionada - REFERÊNCIA: atributo data-key
    let keyElement = document.querySelector(`div[data-key="${note}"]`);

    // Verifica se encontrou
    if (keyElement) {
        // Se encontrar, add Class
        keyElement.classList.add('note-touched');

        // Define um TIME para remover a class ACTIVE
        setTimeout(() => {
            keyElement.classList.remove('note-touched');
        }, 300);
    }


}

