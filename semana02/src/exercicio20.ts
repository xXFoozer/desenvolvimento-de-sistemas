import leia from 'readline-sync';

export default function exercicio20() {
    let numeroDigitado = leia.questionInt("DIGITE UM NUMERO: ");

    while (numeroDigitado >= 0) {
        console.log(numeroDigitado);
        numeroDigitado--;
    }
}
