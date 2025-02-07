import leia from 'readline-sync';

export default function exercicio06() {
    let corrida01 = leia.questionFloat("DIGITE O VALOR DA CORRIDA 01: ");
    let corrida02 = leia.questionFloat("DIGITE O VALOR DA CORRIDA 02: ");
    let corrida03 = leia.questionFloat("DIGITE O VALOR DA CORRIDA 03: ");
    let corrida04 = leia.questionFloat("DIGITE O VALOR DA CORRIDA 04: ");
    let corrida05 = leia.questionFloat("DIGITE O VALOR DA CORRIDA 05: ");

    let total = corrida01 + corrida02 + corrida03 + corrida04 + corrida05;
    let desconto = total * 0.25;
    let totalLiquido = total - desconto;

    console.log(`VALOR BRUTO R$${total.toFixed(2)}\nVALOR LIQUIDO R$${totalLiquido.toFixed(2)}`);
}