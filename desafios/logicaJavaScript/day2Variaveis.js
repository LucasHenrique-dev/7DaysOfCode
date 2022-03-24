/*
Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
*/

let nome = "", idade = "", linguagem = "", resposta = -1, resposta2 = -1

nome = prompt("Qual o seu nome?")
idade = prompt("Quantos anos você tem?")
linguagem = prompt("Qual linguagem de programação você está estudando?")

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)

while(resposta != 1 && resposta != 2) {
    resposta = prompt(`Você gosta de estudar ${linguagem}?\nDigite:\n1 - Sim   2 - Não`)
    
    if (resposta == 1) alert("Muito bom! Continue estudando e você terá muito sucesso.")
    else if (resposta == 2) alert("Ahh que pena... Já tentou aprender outras linguagens?")
    else alert("Opção inválida, tente novamente")
}

// Exercício Opcional
/*
Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:

Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?
*/

if (resposta == 2) {
    while(resposta2 != 1 && resposta2 != 2) {
        resposta2 = prompt("1 - Sim 2 - Não")
        if (resposta2 == 1) alert("Incrível! O importante é treinar, mas garanto que você também gostará dessa se persistir!")
        else if (resposta2 == 2) alert("Espero que você continue estudando, a lógica é a base para aprender qualquer linguagem. Certamente você poderá aprender outras com mais facilidade após dominar o assunto! ")
        else alert("Opção inválida, tente novamente")
    }
}
