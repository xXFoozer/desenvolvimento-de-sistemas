import leia from 'readline-sync';

export default function exercicio11() {
    var placa = leia.question("INFORME A PLACA DO VEICULO: ")
    var ultimoDigito = placa.charAt(placa.length - 1)

    switch (ultimoDigito) {
        case '0':
        case '1':
            console.log("NÃO PODE RODAR NA SEGUNDA-FEIRA")
            return;
        case '2':
        case '3':
            console.log("NÃO PODE RODAR NA TERÇA-FEIRA")
            break;
        case '4':
        case '5':
            console.log("NÃO PODE RODAR NA QUARTA-FEIRA")
            break;
        case '6':
        case '7':
            console.log("NÃO PODE RODAR NA QUINTA-FEIRA")
            break;
        case '8':
        case '9':
            console.log("NÃO PODE RODAR NA SEXTA-FEIRA")
            break;
        default:
            console.log("ESSA PLACA NÃO VÁLIDA!!")
            break;
    }

}