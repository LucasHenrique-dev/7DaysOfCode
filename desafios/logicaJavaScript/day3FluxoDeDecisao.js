/*
Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.
*/

let resposta1 = -1, resposta2 = -1, resposta3 = -1, resposta4 = -1, tecnologias = []

alert("Olá como está? Espero que bem!\nHoje quero te fazer umas perguntas..")
alert("Quero conhecer o seu perfil como programador!\nEntão prepare-se")

while (resposta1 != 1 && resposta1 != 2) {
    resposta1 = prompt("Em qual dessas áreas você gostaria de focar?\n1 - Front-End  2 - Back-End")
    if (resposta1 != 1 && resposta1 != 2)
        alert("Vamos lá, digite '1' para escolher Front-End ou '2' para escolher Back-End")
}

alert("Ótima escolha!\nPara se dar bem na área é preciso escolher uma linguagem para começar os estudos")

while (resposta2 != 1 && resposta2 != 2) {
    if (resposta1 == 1) {
        resposta2 = prompt("Qual dessas linguagens você quer aprender?\n1 - React   2 - Vue")
        tecnologias.push((resposta2 == 1)? "React": "Vue")
    }
    else if (resposta1 == 2) {
        resposta2 = prompt("Qual dessas linguagens você quer aprender?\n1 - C# 2 - Java")
        tecnologias.push((resposta2 == 1)? "C#": "Java")
    }
    if (resposta2 != 1 && resposta2 != 2)
        alert("Digite '1' ou '2' para responder a pergunta!")
}

alert(`Incrível! Você está traçando um caminho de sucesso!\nAgora o próximo passo importante é decidir entre se especializar em ${(resposta1 == 1)? "Front-End": "Back-End"} ou se desenvolver mais em ${(resposta1 == 1)? "Back-End": "Front-End"} e se tornar um desenvolvedor Fullstack!`)

resposta3 = prompt("Decisão difícil hein?\nQue decisão você tomará:\n1 - Especialista  2 - Fullstack")

while (resposta3 != 1 && resposta3 != 2) {
    resposta3 = prompt("Vamos lá, não tema! Não há decisão errada\n1 - Especialista 2 - Fullstack")
}

if (resposta3 == 1) alert("hhmm, decidiu por evoluir de padawan para Jedi!\nExcelente escolha! Boa sorte na sua jornada e que a força esteja com você!!")
else alert("Wow, com certeza não haverá mais roda de conversa que você se sentirá por fora!\nO caminho Fullstack lhe permitirá dialogar com várias áreas e estou certo de que foi uma ótima escolha!!")

alert("Estou chegando no fim!")


if (resposta3 == 1) tecnologias.push(prompt("Sobre seus futuros estudos, qual linguagem você gostaria de se especializar?"))
else tecnologias.push(prompt("Sobre seus futuros estudos, qual linguagem você gostaria de conhecer?"))

while (true) {
    resposta4 = prompt("Tem mais alguma tecnologia que você gostaria de aprender?\n1 - Sim  2 - Não")

    if (resposta4 == 1) {
        tecnologias.push(prompt("Gostei do entusiasmo!\nMe conte qual seria:"))
    } else if (resposta4 == 2) {
        alert("Parece que você já tem um belo caminho a trilhar, lhe desejo Boa Sorte!")
        break
    } else if (resposta4 != 1 && resposta4 != 2) {
        alert("Vamos lá, me diga '1' para Sim e '2' para Não")
    }
}

alert(`Não se esqueça de anotar as tecnologias para estudar depois\nObjetivos: ${tecnologias}`)
