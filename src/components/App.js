//------------------Modulo 1 generar tablero-------------------
import pokemon from '../data/pokemon/pokemon.js'

const data = pokemon

const generarTablero = () =>{
const elementos = document.createElement('section');
elementos.contains =[]
let tarjetas = []
    for(let j = 0; j<2; j++){
        for(let i = 0; i < 9; i++){
            tarjetas.push(`
            <div class="area-tarjeta">
                <div class="tarjeta" data-pokemon="${data.items[i].id}">
                    <div class="cara trasera" >
                        <img src="${data.items[i].image}" id=""  alt="Pokémon">
                    </div>
                    <div class="cara delantera">
                        <i class="far fa-question-circle"></i>
                    </div>
                </div>
            </div>     
        `) 
        console.log(data.items[i].image)
        console.log(data.items[i].id)
        
        }
        data.items.sort(()=>Math.random()-0.5)
        elementos.innerHTML = tarjetas.join("") 
    }                
    
    return elementos

}



generarTablero()
export {generarTablero}


