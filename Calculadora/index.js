let nunVitorias=10;
let nunDerrotas=5;
let total;
function somarGanhos(nunVitoria,nunDerrota){
  total=nunVitoria - nunDerrota;
  return total;
}
let ranquear = somarGanhos
console.log("o numero do ranque é", ranquear)