import leia from 'readline-sync';

export default function exercicio19() {
    let numeroDigitado = leia.questionInt("INFORME O NÚMERO FINAL: ")

    for (let i = 0; i <= numeroDigitado; i++) {
        console.log(i);
    }


    let i = 0;
    let controle = true;
    while (controle) {
        if (i <= numeroDigitado) {
            console.log(i);
            i++
        } else {
            controle = false;
        }
    }

}