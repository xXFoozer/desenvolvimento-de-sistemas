import leia from 'readline-sync'

export default function exercicio16() {
    let idade = leia.questionInt("INFORME SUA IDADE: ")
    if (idade >= 18) {
        let nome = leia.question("INFORME SEU NOME COMPLETO: ");

        console.log(`SEU NOME É ${nome} E SUA IDADE É ${idade}`)
    } else {
        let permissao = leia.keyInYN("VOCE TEVE PERMISSÃO DOS PAIS: ")
        if (permissao) {
            let nome = leia.question("INFORME SEU NOME COMPLETO: ");
            console.log(`SEU NOME É ${nome} E SUA IDADE É ${idade} E VOCÊ TEVE PERMISSÃO DOS PAIS`)
        }
    }
}