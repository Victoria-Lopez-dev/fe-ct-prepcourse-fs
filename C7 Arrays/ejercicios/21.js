function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let mesesEncontrados =array.filter((mes)=>mes ==="Enero" || mes === "Noviembre" || mes === "Marzo");
  let contador = 0;
  for(let mes of mesesEncontrados){
    if(mes === "Enero" || mes === "Noviembre" || mes === "Marzo"){
      contador++;
    }
  }      
if(contador !== 3){return "No se encontraron los meses pedidos";}else{
  return mesesEncontrados;
}

}

module.exports = mesesDelAño;

