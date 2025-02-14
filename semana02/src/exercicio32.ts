import leia from 'readline-sync'

export default function exercicio32() {
    let numero = leia.questionInt("INFORME O NUMERO: ");
    let resultado = 1;

    for (var i = numero; i > 0; i--) {
        resultado *= i;
    }

    console.log(resultado)
}