/*
## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
 

 
Bons estudos 😉 */
let listar = {
	name: "Heroi do gelo",
    age: 17,
    herois: {
    	0: ["Mago", "Magia"],
        1: ["Gerreiro", "Espada"],
        2: ["Monge", "Artes Marcias"],
        3: ["Ninja", "Shuriken"]
    }
}

atacar(listar)

function atacar(listar){
	console.log(`O Jogador é ${listar.name}`)
    console.log(`A idade é ${listar.age}`)
    console.log("------------")
    
    for(let i in listar.herois){
    	let [tipo, ataque] = listar.herois[i]
        console.log(`-O ${tipo} atacou usando ${ataque}`)
    }
    
    
}