/*
Para o exercício de hoje: você já parou para pensar como uma calculadora funciona?

Ela pede para você digitar um número, depois você seleciona um tipo de operação, um outro número, e ela faz sozinha o cálculo para te mostrar o resultado! Incrível, né?

Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, porém com um detalhe muito importante: cada operação deverá ser uma função diferente no seu código.

Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.

Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão.

As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima".
*/

let operacao = -1, num1 = -1, num2 = -1, continuar = -1

alert("Olá!!\nVamos fazer alguns cálculos?\nEstou aqui para te ajudar nesta missão")
alert("Funcionará assim:\n\n- Primeiro você escolhe uma operação entre: Adição, Subtração, Multiplicação e Divisão\n- Depois irá me dizer os números com os quais deseja realizar a operação escolhida\n- Por fim, eu te direi o resultado!\n\nEntão vamos lá!!")

while (true) {
    continuar = -1

    operacao = prompt("Digite o número correspondente a operação para realiza-la:\n\n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão")

            
    if (!validarOperacao(operacao)) alert("Ops! A opção que você escolheu não está disponível")
    else {

        do {
            num1 = prompt("Qual o 1° número? (Número que ficará do lado esquerdo do operador)\n")
            if (validarNumero(num1)) {
                num1 = parseFloat(num1.replace(",", "."))
                break
            }
        }   while (true);

        do {
            num2 = prompt("Qual o 2° número? (Número que ficará do lado direito do operador)\n")
            if (validarNumero(num2)) {
                num2 = parseFloat(num2.replace(",", "."))
                break
            }
        } while (true);

        switch (operacao) {
            case "1":
                adicao(num1, num2)
                break;
            case "2":
                subtracao(num1, num2)
                break;
            case "3":
                multiplicacao(num1, num2)
                break;
            case "4":
                divisao(num1, num2)
                break;
            default:
                alert("Ops! Parece que algo deu errado")
                break;
        }
    }

    while (continuar != 1 && continuar != 2) {
        continuar = prompt("Deseja continuar?\n1 - Sim    2 - Não")
        if (continuar != 1 && continuar != 2) alert("Digite '1' para responder 'Sim' e digite '2' para responder 'Não'")
    }

    if (continuar == 2) break
}

function validarOperacao(operacao) {
    return operacao == 1 || operacao == 2 || operacao == 3 || operacao == 4
}

function validarNumero(numero) {
    numero = numero.replace(",", ".")
    numero = parseFloat(numero)

    if (isNaN(numero)) {
        alert("Ops! Parece que o valor que você passou não é um número, tente novamente")
        
        return false
    }

    return true
}

function adicao(num1, num2) {
    alert(`${num1} + ${num2} = ${num1 + num2}`)
}

function subtracao(num1, num2) {
    alert(`${num1} - ${num2} = ${num1 - num2}`)
}

function multiplicacao(num1, num2) {
    alert(`${num1} X ${num2} = ${num1 * num2}`)
}

function divisao(num1, num2) {
    if (num2 == 0) {
        alert("Ops! Os valores informados são inválidos para a divisão, não podemos dividir por zero!")
    }
    else alert(`${num1}/${num2} = ${num1 / num2}`)
}
