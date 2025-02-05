import leia from 'readline-sync';

export default function exercicio01() {
    let numero = leia.questionInt("DIGITE UM NUMERO: ");
    console.log(`O NUMERO DIGITADO: ${numero}`);
    
    let antecessor = --numero;
    console.log(`O ANTECESSOR É: ${antecessor}`);
}