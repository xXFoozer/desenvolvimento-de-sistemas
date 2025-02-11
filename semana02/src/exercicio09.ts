import leia from 'readline-sync';

export default function exercicio09() {
    const SENHA_APP = "1234";

    let senhaDigitada = leia.question("INFORME A SENHA: ");
    if (senhaDigitada === SENHA_APP) {
        console.log("ACESSO PERMITIDO!!!")
    } else {
        console.log("ACESSO NEGADO!!!")
    }
}