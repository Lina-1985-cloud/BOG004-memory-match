import { generarTablero } from "./App";

describe('generarTablero',()=>{
  it('Debería ser un Html',()=>{
    const elementos = generarTablero()
    expect(elementos instanceof HTMLElement).toBe(true)
  });
  it('Debería imprimir 18 tarjetas',()=>{
    const tarjetas = generarTablero()
    const result = tarjetas.querySelectorAll('.tarjeta')
    expect(result.length).toBe(18);
  });

})

