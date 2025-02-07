import leia from 'readline-sync';

export default function exercicio02(){
    let altura = leia.questionFloat("INFORME A ALTURA DO RETANGULO: ")
    var largura = leia.questionFloat("INFORME A LARGURA DO RETANGULO: ")

    var area = altura * largura;

    console.log(`A AREA DO RETANGULO É ${area} metros quadrados`);
}
