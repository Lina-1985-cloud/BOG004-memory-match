import { generarTablero } from "./App";

describe('generarTablero',()=>{
  it('Debería ser una función',()=>{
    const elementos = generarTablero()
    expect(elementos instanceof HTMLElement).toBe(true)
  });
  it('Debería imprimir la data',()=>{
    const tarjetas = generarTablero()
    expect(tarjetas instanceof HTMLElement).toBe(true)
  });
  // it('Debería Ramdomizarla',()=>{
  //   elementos = generarTablero()
  //   expect(data.items)
  // })
})

