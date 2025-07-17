function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let total= 1
  for(let i=a; i <= b; i++) {
    if (i === 0 || b === 0) {
      return 0;
    }
    
   total *= i;
  }
  return total;
}

module.exports = productoEntreNúmeros;