import leia from 'readline-sync'

export default function exercicio27() {
    let qtdNumeroRange = 0;
    let numeroDigitado;

    do {
        numeroDigitado = leia.questionInt("DIGITE UM NUMERO: ");
        if (numeroDigitado > 100 && numeroDigitado < 200) {
            qtdNumeroRange++;
        }
    } while (numeroDigitado !== 0);

    console.log("NÚMERO ENTRE 100 E 200 FORAM: " + qtdNumeroRange)
}