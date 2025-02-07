import leia from 'readline-sync';

export default function exercicio04() {
    let totalVotos = leia.questionInt("INFORME NÚMERO DE ELEITORES: ");
    let brancos = leia.questionInt("INFORME NÚMERO DE VOTOS BRANCOS: ");
    let nulos = leia.questionInt("INFORME NÚMERO DE NULOS: ");

    let validos = totalVotos - (brancos + nulos);
    let perValalidos = (validos / totalVotos) * 100;
    let perNulos = (nulos / totalVotos) * 100;
    let perBranco = (brancos / totalVotos) * 100;

    console.log(`TOTAL VOTOS: ${totalVotos.toFixed(1)}`)
    console.log(`TOTAL VOTOS VALIDOS: ${perValalidos.toFixed(1)}%`)
    console.log(`TOTAL VOTOS BRANCOS: ${perBranco.toFixed(1)}%`)
    console.log(`TOTAL VOTOS NULOS: ${perNulos.toFixed(1)}%`)
}

