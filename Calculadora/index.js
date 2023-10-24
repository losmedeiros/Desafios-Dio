let vitorias=100;
let derrotas=5;
let total;
let nivelHeroi="";
function calculoVitorias(nunVitoria,nunDerrota){
  total=nunVitoria - nunDerrota;
  return total;
}
let saldoVitorias = calculoVitorias(vitorias,derrotas)

if(saldoVitorias<=10){
 nivelHeroi="ferro"
}else if(saldoVitorias>10&&saldoVitorias<=20){
 nivelHeroi="Bronze"                               
}else if(saldoVitorias>20&&saldoVitorias<=50){
 nivelHeroi="Prata"
}else if(saldoVitorias>50&&saldoVitorias<=80){
 nivelHeroi="Ouro"
}else if(saldoVitorias>80&&saldoVitorias<=90){
 nivelHeroi="Diamante"
}else if(saldoVitorias>90&&saldoVitorias<=100){
 nivelHeroi="Lendário"
}else if(saldoVitorias>100){
 nivelHeroi="Imortal"
}
//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivelHeroi}`)