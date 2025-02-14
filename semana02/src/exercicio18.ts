import leia from 'readline-sync'

export default function exercicio18() {
    let nome = leia.question("INFORME SEU NOME: ");
    let bruto = leia.questionFloat("INFORME O SEU SALARIO BRUTO: ");
    let dependentes = leia.questionInt("INFORME A QUANTIDADE DE DEPENDENTES: ");
    let salario = 0;

    if(dependentes === 0){
        salario = bruto * 1.02;
    }else if(dependentes === 1){
        salario = bruto * 1.05
    }else if(dependentes === 2) {
        salario = bruto * 1.07
    }else if(dependentes === 3){
        salario = bruto * 1.10;
    }else {
        salario = bruto * 1.15;
    }

    console.log(`${nome} SEU SALARIO É DE R$${salario} E VOCÊ TEM ${dependentes} DEPENDENTES`)

}