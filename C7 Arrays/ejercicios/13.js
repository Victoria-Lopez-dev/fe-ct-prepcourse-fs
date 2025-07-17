function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let resultado = array.filter((elemento) => {
    return typeof elemento === 'number' && elemento % 2 === 0;
  });
  return resultado;
}

module.exports = filtrarNumerosPares;
