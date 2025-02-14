import leia from 'readline-sync'

export default function exercicio33() {
    var decimal = leia.questionInt("DIGITE UM NUMERO");
    var binario = '';

    while (decimal >= 1) {
        var result = Math.trunc(decimal / 2);
        var resto = decimal % 2;
        decimal = result;
        binario = resto + binario;
    }

    console.log(binario)
}