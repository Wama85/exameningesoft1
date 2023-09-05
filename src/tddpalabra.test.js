import validartexto from "./validar"

describe("DETECTAR CANTIDAD DE FRASES EN UNA ORACION", () => {
  it("DEBERIA MOSTRAR 1 Frase", () => {
    const palabra="El"
    expect(validartexto(palabra)).toEqual(1);
  });

  

});
