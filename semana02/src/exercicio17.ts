import leia from 'readline-sync'

export default function exercicio17() {
    let timeA = leia.questionInt("INFORME QUANTOS GOLS TIME A FEZ: ")
    let timeB = leia.questionInt("INFORME QUANTOS GOLS TIME B FEZ: ")


    // Math.abs() - função para remover sinal negativo
    let diferenca = Math.abs(timeA - timeB);

    switch (diferenca) {
        case 0:
            console.log("O JOGO DEU EMPATE...")
            break;
        case 1:
        case 2:
        case 3:
            console.log("JOGO NORMAL...")
            break;
        default:
            console.log("GOLEADAAAAAA....")
    }
}