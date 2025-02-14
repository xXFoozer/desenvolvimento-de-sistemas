import leia from 'readline-sync';

export default function exercicio30() {
    let gameMode = leia.keyInSelect(["PvE", "PvP"]);
    let magicNumber = 0;

    if (gameMode === 0) {
        magicNumber = Math.floor(Math.random() * 100);
    } else {
        magicNumber = leia.questionInt("INFORME O NUMERO MÁGICO: ");
    }

    let tentativa;
    do {
        tentativa = leia.questionInt("QUAL E O MAGIC NUMBER? ")
        if (tentativa > magicNumber) {
            console.log("O MAGIC NUMBER É MENOR")
        }

        if (tentativa < magicNumber) {
            console.log("O MAGIC NUMBER É MAIOR")
        }
    } while (tentativa !== magicNumber)
}