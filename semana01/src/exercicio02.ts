import leia from 'readline-sync';

export default function exercicio02(){
    let anos = leia.questionInt("INFORME OS ANOS: ")
    let meses = leia.questionInt("INFORME OS MESES: ")
    let dias = leia.questionInt("INFORME OS DIAS: ")

    let diasTotais = (anos * 365) + (meses * 30) + dias;

    console.log(diasTotais);
}