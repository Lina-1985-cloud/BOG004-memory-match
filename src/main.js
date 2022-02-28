import { generarTablero } from "./components/App.js";

document.getElementById("root").appendChild(generarTablero());

// Cambio pantallas
document.getElementById("root").style.display = "none";
document.getElementById('pantallaFinal').style.display = "none";
const section = (document.getElementById("root"))
const play = document.getElementById("play");
play.addEventListener("click", () => {
    document.querySelector("section").style.display = "none";
    section.style.display = "block";
});

// funcion ganaste cambio pantalla

function ganaste(){
    document.getElementById("root").style.display = "none";
    document.getElementById('pantallaFinal').style.display = "block";
}


// Variables Globales
var tarjetaVolteada = false;
var bloquearTablero = false;
var primeraTarjeta, segundaTarjeta;
var contadorDeParejas = 0;

// validar tarjetas
const tarjetas = document.querySelectorAll(".tarjeta");

function validarParejas(){
    let sonPareja = primeraTarjeta.dataset.pokemon === segundaTarjeta.dataset.pokemon
    if (sonPareja){
        contadorDeParejas += 1
        primeraTarjeta.removeEventListener('click' , voltearTarjeta);
        segundaTarjeta.removeEventListener('click' , voltearTarjeta);
    
        if (contadorDeParejas === 9){
            
            setTimeout(() => {
            ganaste()   
            },1000);
    
        }
    }else {
        bloquearTablero = true;
        setTimeout(() => {
            primeraTarjeta.classList.remove('voltear');
            segundaTarjeta.classList.remove('voltear');
        bloquearTablero = false    
        }, 1500 );
        
    }
}

/* función para voltear tarjetas*/
tarjetas.forEach((tarjeta) => tarjeta.addEventListener("click", voltearTarjeta));
function voltearTarjeta() {
    if (bloquearTablero) return; // cuando bloquear tablero sea falso sigue al siguiente if
    if (this === primeraTarjeta) // Esto no permite que se autovaliden las tarjetas
    return; // y este nos retorna a la siguiente condición
    this.classList.add("voltear");
    if (!tarjetaVolteada) {
        tarjetaVolteada = true;
        primeraTarjeta = this;
        return;

    } else{
        tarjetaVolteada = false;
        segundaTarjeta = this;
    
        validarParejas();          
    }

}


// volver al juego
let volverAlJuego = document.getElementById("volverAjugar")
volverAlJuego.addEventListener("click", ()=>{
    location.reload('section')
    document.querySelector(".pantallaFinal").style.display = "none";
})