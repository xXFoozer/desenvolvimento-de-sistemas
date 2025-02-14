import leia from 'readline-sync'

export default function exercicio31() {
    let posicao = leia.questionInt("INFORME ATÉ QUE POSIÇÃO DA SEQUENCIA FIBONACCI DESEJA: ")

    var anterior = 0, atual = 1, proximo, resultado = "0 - 1";

    for (var i = 2; i < posicao; i++) {
        proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
        resultado = resultado + " - " + proximo;
    }
    console.log(resultado);
}