import { generarTablero } from "./components/App.js";

document.getElementById("root").appendChild(generarTablero());

// Cambio pantalla
document.getElementById("root").style.display = "none";
document.getElementById('pantallaFinal').style.display = "none";
const section = (document.getElementById("root"))
const play = document.getElementById("play");
play.addEventListener("click", () => {
    document.querySelector("section").style.display = "none";
    section.style.display = "block";
});

// función click a las tarjetas
var tarjetaVolteada = false;
var bloquearTablero = false;
var primeraTarjeta, segundaTarjeta;
var contadorDeParejas = 0

const tarjetas = document.querySelectorAll(".tarjeta");
function voltearTarjeta() {
    if (bloquearTablero) return;
    if (this === primeraTarjeta) return;

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
/* función para chequiar las parejas*/

function validarParejas(){
    let sonPareja = primeraTarjeta.dataset.pokemon === segundaTarjeta.dataset.pokemon
    if (sonPareja){
        contadorDeParejas += 1
        deshabilitarTarjetas()
    }else {
        desplegarTarjetas()
        
    }
}

/* función para desabilitar las tarjetas */
function deshabilitarTarjetas (){
    primeraTarjeta.removeEventListener('click' , voltearTarjeta);
    segundaTarjeta.removeEventListener('click' , voltearTarjeta);

    if (contadorDeParejas === 9){
        
        setTimeout(() => {
        ganaste()   
        },1000);

    }
}

/*función para desplegar las tarjetas*/
function desplegarTarjetas (){
    bloquearTablero = true;
    setTimeout(() => {
        primeraTarjeta.classList.remove('voltear');
        segundaTarjeta.classList.remove('voltear');
    bloquearTablero = false    
    }, 1500 );
    
}

tarjetas.forEach((tarjeta) =>
    tarjeta.addEventListener("click", voltearTarjeta)
);

function ganaste(){
    document.getElementById("root").style.display = "none";
    document.getElementById('pantallaFinal').style.display = "block";

}

// volver al juego
let volverAlJuego = document.getElementById("volverAjugar")
volverAlJuego.addEventListener("click", ()=>{
    location.reload('section')
    document.querySelector(".pantallaFinal").style.display = "none";
})