function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  let resultado = [];
  let iteraciones = 1;
  while(iteraciones<=10){
  if(iteraciones === 5){
      iteraciones++;
      continue;
    }
    let suma=nun+2;
    resultado.push(suma);
  }
  return resultado;
}

module.exports = continueStatement;
