/*
Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?

A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.

Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.

Por fim, ele voltará para o ciclo inicial de perguntas.

Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.

Por exemplo: “Não foi possível encontrar o item dentro da lista!”

Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras.
*/

let lista = new Map(), resposta1 = -1, resposta2 = -1, item = "", categoria = "", adicionarOuRemover = -1, removerResposta = -1, itemRemovido = false, novaLista = -1

alert("Hoje vou te ajudar a organizar sua lista de compras!")
alert("Primeiro me diga que categorias ela terá, exemplo: Frutas, congelados, doces...")

do {
    novaLista = -1
    
    categoria = prompt("Inisira uma categoria: ")
    categoria = capitalize(categoria)
    lista.set(categoria, [])
    
    while (resposta1 != 2) {
        resposta1 = prompt("Deseja adicionar mais uma categoria?\n1 - Sim  2 - Não")
        if (resposta1 != 1 && resposta1 != 2) alert("Responda com Sim[1] ou Não[2]")
        else if (resposta1 == 1) {
            categoria = prompt("Inisira uma categoria: ")
            categoria = capitalize(categoria)
            lista.set(categoria, [])
        }
    }
    
    alert("Ótimo, definido as categorias vamos para os itens!")
    
    while (true) {
        
        do {
            adicionarOuRemover = prompt("Você deseja adicionar ou remover um item?\n1 - Adicionar   2 - Remover")
            if (adicionarOuRemover != 1 && adicionarOuRemover != 2) alert("Digite '1' para responder 'Adicionar' ou digite '2' para responder 'Remover'")
        } while (adicionarOuRemover != 1 && adicionarOuRemover != 2)
    
        if (adicionarOuRemover == 1) adicionarItem()
        else {
            do {
                removerResposta = -1
                itemRemovido = removerItem()
        
                if (!itemRemovido) {
                    while (removerResposta != 1 && removerResposta != 2) {
                        removerResposta = prompt("Deseja tentar remover um item novamente?\n1 - Sim    2 - Não")
                        if (removerResposta != 1 && removerResposta != 2) alert("Digite '1' para Sim e '2' para Não")
                    }
                } else removerResposta = 2
            } while (removerResposta != 2)          
        }
        
        while (resposta2 != 1 && resposta2 != 2) {
            resposta2 = prompt("Deseja continuar modificando a lista?\n1 - Sim   2 - Não")
            if (resposta2 != 1 && resposta2 != 2) alert("Digite '1' para Sim e '2' para Não")
        }
    
        if (resposta2 == 1) resposta2 = -1
        else break
    }
    
    alert(`Aqui está a sua lista:\n\n${exibirCompras(lista)}\n\nBoas Compras!!`)

    while (novaLista != 1 && novaLista != 2) {
        novaLista = prompt("Deseja fazer uma nova lista?\n1 - Sim   2 - Não")
        if (novaLista != 1 && novaLista != 2) alert("Digite '1' para Sim e '2' para Não")
    }
    if (novaLista == 1) {
        resposta1 = resposta2 = adicionarOuRemover = removerResposta = -1
        itemRemovido = false
        lista = new Map()
    }

} while (novaLista == 1)

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

function verificarCategoria(categoria) {
    categoria = capitalize(categoria)

    while (!lista.has(categoria)) {
        categoria = prompt(`Ops! Parece que você me disse uma categoria inválida\nEssas são as categorias que você adicionou:\n\n${[...lista.keys()].join("\n")}\n\nQual delas você quis escolher ao dizer "${categoria}" ?`)
        categoria = capitalize(categoria)
    }
    
    return categoria
}

function verificarItem(categoria, item) {
    let flag = true

    if (!lista.get(categoria).includes(item)) {
        alert(`Ops! Parece que você me disse uma categoria inválida ou este item não está na sua lista de compras\nEsta é sua lista atual:\n\n${exibirCompras(lista)}\n\nVocê pediu para remover "${item}" da categoria "${categoria}"`)

        flag = false
    }

    return flag
}

function adicionarItem() {
    item = prompt("O que deseja adicionar?")

    categoria = prompt("A que categoria pertence?")
    
    categoria = verificarCategoria(categoria)
    
    lista.get(categoria).push(item)
}

function removerItem() {
    let itemIndex = -1

    item = prompt("O que deseja remover?")
    categoria = prompt("A que categoria pertence?")
    
    categoria = verificarCategoria(categoria)

    if (!verificarItem(categoria, item)) return false
    
    itemIndex = lista.get(categoria).indexOf(item)
    lista.get(categoria).splice(itemIndex, 1)

    return true
}
