import validartexto from "./validar"

describe("DETECTAR CANTIDAD DE FRASES EN UNA ORACION", () => {
  it("DEBERIA MOSTRAR primera palabra", () => {
    const texto='El';
    expect(validartexto(texto)).toEqual(1);
  });
  it("DEBERIA MOSTRAR mostrar segunda palabra", () => {
    const texto='password';
    expect(validartexto(texto)).toEqual(2);
  });
  it("DEBERIA MOSTRAR tercera palabra", () => {
    const texto='de';
    expect(validartexto(texto)).toEqual(3);
  });
  it("DEBERIA MOSTRAR cuarta palabra", () => {
    const texto='mi';
    expect(validartexto(texto)).toEqual(1);
  });
  it("DEBERIA MOSTRAR quinta palabra", () => {
    const texto='cuenta';
    expect(validartexto(texto)).toEqual(1);
  });

  

});
