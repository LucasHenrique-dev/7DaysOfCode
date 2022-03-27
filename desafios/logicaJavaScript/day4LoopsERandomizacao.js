/*
Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.
*/

let numero = Math.floor(Math.random() * 11), chute = -1, acerto = false, resposta = -1, continuar = true

alert("Olá! Como vai? Espero que bem!\nVamos jogar um jogo?")
alert("Um jogo de adivinha, funcionará assim:\n\n- Pensarei em um número de 0 até 10\n- Você terá 3 chances para adivinhá-lo\n\nVamos lá?")

while (true) {
    for (let index = 0; index < 3; index++) {
        do {
            chute = prompt(`${index+1}ª chance: `)
        } while (!(chute in [...Array(10).keys()]))
        if (chute == numero) {
            acerto = true
            break
        }
    }
    
    if (acerto) alert("Parabéns, era exatamente nesse número que estava pensando!!!")
    else alert(`Poxa, não foi dessa vez.. Estava pensando no número ${numero}\nVamos ver se você consegue na próxima`)
    
    while (resposta != 1 && resposta != 2) {
        resposta = prompt("Deseja jogar novamente?\n1 - Sim    2 - Não")
        if (resposta != 1 && resposta != 2) alert("Você deve responder '1' ou '2'!")
        else if (resposta == 1) continuar = true
        else continuar = false
    }

    if (!continuar) break

    numero = Math.floor(Math.random() * 11)
    chute = resposta = -1
    acerto = false
}

alert("Foi um prazer jogar com você, até uma próxima!")
