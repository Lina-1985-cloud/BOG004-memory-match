import pokemon from '../data/pokemon/pokemon.js'

// Cambio de pantalla
/*const boton= document.getElementById('play')
document.getElementById("indexPage").style.display= 'block'
//document.querySelector("section").style.display= 'none'
boton.addEventListener('click', () => {
     
    console.log("hiciste click")
} )

 // document.querySelector('section').style.display=block*/
const play= document.getElementById('play');
const indexPage= document.getElementById('indexPage').style.display= 'block';
const section= document.getElementById('root').style.display= 'none';
  play.addEventListener('click', ()=>{
     indexPage= document.getElementById('indexPage').style.display= 'none';
     section= document.getElementById('root').style.display= 'block';
    

  } )

var data = pokemon

//Modulo 1 generar tablero
const generarTablero = () =>{
  const elementos = document.createElement('section');
  elementos.contains =[]
  let tarjetas = []
      for(let j = 0; j<2; j++){
          for(let i = 0; i < 9; i++){
              tarjetas.push(`
              <div class="area-tarjeta"(${i})">
                  <div class="tarjeta" id="tarjeta${i}">
                      <div class="cara trasera" id="trasera${i}">
                      <img src="${data.items[i].image}" alt="">
                      </div>
                  </div>
                  <div class="cara superior">
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


