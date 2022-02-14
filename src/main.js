import {generarTablero}from './components/App.js';

document.getElementById('root').appendChild(generarTablero());

// Cambio pantalla

document.getElementById('root').style.display= 'none';
const play= document.getElementById('play');
    play.addEventListener('click', ()=>{
        document.querySelector('div').style.display= 'none';
        const section = document.getElementById('root').style.display= 'block';
} )


// función click a las tarjetas


const tarjetas = document.querySelectorAll('.tarjeta')
let tajetaVolteada = false;
let primeraTarjeta, segundaTarjeta;

function voltearTarjeta(){
    this.classList.toggle('voltear');
    // if (!tajetaVolteada) {
    //     tajetaVolteada = true;
    //     primeraTarjeta = this;

    // }
    console.log('click');
    console.log(this);
}

tarjetas  .forEach (tarjeta => tarjeta.addEventListener('click', voltearTarjeta));