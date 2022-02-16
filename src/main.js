import { generarTablero } from "./components/App.js";

document.getElementById("root").appendChild(generarTablero());

// Cambio pantalla
const section = (document.getElementById("root"))
document.getElementById("root").style.display = "none";
const play = document.getElementById("play");
play.addEventListener("click", () => {
    document.querySelector("div").style.display = "none";
    section.style.display = "block";
});

// función click a las tarjetas
var tarjetaVolteada = false;
var primeraTarjeta, segundaTarjeta;
const tarjetas = document.querySelectorAll(".tarjeta");
function voltearTarjeta() {
    this.classList.add("voltear");
    if (!tarjetaVolteada) {
        tarjetaVolteada = true;
        primeraTarjeta = this;
    } else {
        tarjetaVolteada = false;
        segundaTarjeta = this;
        console.log({ primeraTarjeta, segundaTarjeta });
        console.log(primeraTarjeta.dataset.pokemon);
        console.log(segundaTarjeta.dataset.pokemon);

        if (primeraTarjeta.dataset.pokemon === segundaTarjeta.dataset.pokemon){
            primeraTarjeta.removeEventListener('click' , voltearTarjeta);
            segundaTarjeta.removeEventListener('click' , voltearTarjeta);
        } else {
            setTimeout(() => {
                primeraTarjeta.classList.remove('voltear');
                segundaTarjeta.classList.remove('voltear');
            }, 1000 );
            
        }

        console.log("la función se ejecuto")

    }
}

tarjetas.forEach((tarjeta) =>tarjeta.addEventListener("click", voltearTarjeta));

