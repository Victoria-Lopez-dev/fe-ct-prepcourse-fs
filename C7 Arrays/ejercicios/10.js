function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  let resultado=array.find((elemento)=>{ return elemento.length > 5; });
  return resultado;
}

module.exports = obtenerPrimerStringLargo;
