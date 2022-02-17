import { generarTablero } from "./components/App.js";

document.getElementById("root").appendChild(generarTablero());

// Cambio pantalla
document.getElementById("root").style.display = "none";
document.getElementById('pantallaFinal').style.display = "none";
const section = (document.getElementById("root"))
const play = document.getElementById("play");
play.addEventListener("click", () => {
    document.querySelector("div").style.display = "none";
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
    this.classList.add("voltear");
    if (!tarjetaVolteada) {
        tarjetaVolteada = true;
        primeraTarjeta = this;

        return;
    } 
    // } else { Segundo click
        tarjetaVolteada = false;
        segundaTarjeta = this;
    //     // console.log({ primeraTarjeta, segundaTarjeta });
    //     // console.log(primeraTarjeta.dataset.pokemon);
    //     // console.log(segundaTarjeta.dataset.pokemon);
         verParejas();          
   
}
/* función para chequiar las parejas
El operador ternario (?) nos permite remplazar un if y else validando las condiones true o false
y ejecutando las expresiones*/ 

function verParejas(){
    let sonPareja = primeraTarjeta.dataset.pokemon === segundaTarjeta.dataset.pokemon
    //sonPareja ? desabilitarTarjetas(): desplegarTarjetas();
    if (sonPareja){
        contadorDeParejas += 1
        desabilitarTarjetas()
    }else {
        desplegarTarjetas()
        
    }
   
}

/* función para desabilitar las tarjetas */
function desabilitarTarjetas (){
    primeraTarjeta.removeEventListener('click' , voltearTarjeta);
    segundaTarjeta.removeEventListener('click' , voltearTarjeta);

    if (contadorDeParejas === 1){
        
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
let volverAlJuego = document.getElementById("volverAjugar")
let terceraPantalla = document.getElementById("pantallaFinal")
volverAlJuego.addEventListener("click", ()=>{
    terceraPantalla.style.display = "none";
    document.getElementById("root").style.display = "block";
})