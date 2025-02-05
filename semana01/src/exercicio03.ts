import { differenceInDays } from 'date-fns';
import leia from 'readline-sync';

export default function exercicio03() {
    let dataNasc = leia.question("INFORME DATA NASCIMENTO.. ");
    let dataFormat = new Date(dataNasc);
    let dataAtual = new Date();

    const diasVividos = differenceInDays(dataAtual, dataFormat);

    console.log(`Você viveu ${diasVividos} dias`)
}