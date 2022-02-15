import { generarTablero } from "./components/App.js";

document.getElementById("root").appendChild(generarTablero());

// Cambio pantalla
document.getElementById("root").style.display = "none";
const play = document.getElementById("play");
play.addEventListener("click", () => {
    document.querySelector("div").style.display = "none";
    const section = (document.getElementById("root").style.display = "block");
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
    }
}
tarjetas.forEach((tarjeta) =>
    tarjeta.addEventListener("click", voltearTarjeta)
);

