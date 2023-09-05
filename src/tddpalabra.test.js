import validartexto from "./validar"
const palabra="El password de mi cuenta es PASSWORD. Es un password de poco cuidado"
describe("DETECTAR CANTIDAD DE FRASES EN UNA ORACION", () => {
  it("DEBERIA MOSTRAR primera palabra", () => {
    
    expect(validartexto(palabra)).toEqual(1);
  });
  it("DEBERIA MOSTRAR mostrar segunda palabra", () => {
    
    expect(validartexto(palabra)).toEqual(2);
  });
  it("DEBERIA MOSTRAR tercera palabra", () => {
    
    expect(validartexto(palabra)).toEqual(3);
  });
  it("DEBERIA MOSTRAR cuarta palabra", () => {
    
    expect(validartexto(palabra)).toEqual(2);
  });

  

});
