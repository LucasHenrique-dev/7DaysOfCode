/*
Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.

Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

Caso você adicione na sua lista:
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

O programa deverá imprimir, por exemplo:

Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho
*/

let lista = new Map(), resposta1 = -1, resposta2 = false, item = "", categoria = ""

alert("Hoje vou te ajudar a organizar sua lista de compras!")
alert("Primeiro me diga que categorias ela terá, exemplo: Frutas, congelados, doces...")

categoria = prompt("Inisira uma categoria: ")
categoria = capitalize(categoria)
lista.set(categoria, [])

while (resposta1 != 2) {
    resposta1 = prompt("Desaeja adicionar mais uma categoria?\n1 - Sim  2 - Não")
    if (resposta1 != 1 && resposta1 != 2) alert("Responda com Sim[1] ou Não[2]")
    else if (resposta1 == 1) {
        categoria = prompt("Inisira uma categoria: ")
        categoria = capitalize(categoria)
        lista.set(categoria, [])
    }
}

alert("Ótimo, definido as categorias vamos para os itens!")

while (true) {
    item = prompt("O que deseja adicionar?")
    categoria = prompt("A que categoria pertence?")
    categoria = capitalize(categoria)
    
    while (!lista.has(categoria)) {
        categoria = prompt(`Ops! Parece que você me disse uma categoria inválida\nEssas são as categorias que você adicionou:\n\n${[...lista.keys()].join("\n")}\n\nEm qual delas você deseja adicionar "${item}"?`)
        categoria = capitalize(categoria)
    }
    
    lista.get(categoria).push(item)
    
    while (resposta2 != 1 && resposta2 != 2) {
        resposta2 = prompt("Deseja adicionar mais itens?\n1 - Sim   2 - Não")
        if (resposta2 != 1 && resposta2 != 2) alert("Digite '1' para Sim e '2' para Não")
    }

    if (resposta2 == 1) resposta2 = -1
    else break
}

alert(`Aqui está a sua lista:\n\n${exibirCompras(lista)}\n\nBoas Compras!!`)

function capitalize(string) {
    string = string.toLowerCase()
    string = string[0].toUpperCase() + string.slice(1)
    
    return string
}

function exibirCompras(lista) {
    mensagem = ""
    lista.forEach((value, key, map) => {
        mensagem += (`${key}: ${[...value].join(", ")}\n`)
    });
    
    return mensagem
}
