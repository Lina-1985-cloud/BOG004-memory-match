import pokemon from '../data/pokemon/pokemon.js'

//------------------ Cambio de pantalla-------------------

document.getElementById('root').style.display= 'none';
const play= document.getElementById('play');
    play.addEventListener('click', ()=>{
        document.querySelector('div').style.display= 'none';
        const section = document.getElementById('root').style.display= 'block';
} )


//------------------Modulo 1 generar tablero-------------------

var data = pokemon

const generarTablero = () =>{
const elementos = document.createElement('section');
elementos.contains =[]
let tarjetas = []
    for(let j = 0; j<2; j++){
        for(let i = 0; i < 9; i++){
            tarjetas.push(`
            <div class="area-tarjeta"(${i})">
                <div class="tarjeta" id="tarjeta${i}">
                    <div class="caraTrasera" id="trasera${i}">
                    <img src="${data.items[i].image}" alt="">
                    </div>
                </div>
                <div class="caraSuperior">
                        <i class="far fa-question-circle"></i>
                    </div>
                </div>
            </div>     
        `) 
        console.log(data.items[i].image)
        }
        data.items.sort(()=>Math.random()-0.5)
        elementos.innerHTML = tarjetas.join("") 
    }                
    
    return elementos

}
generarTablero()
export {generarTablero}


