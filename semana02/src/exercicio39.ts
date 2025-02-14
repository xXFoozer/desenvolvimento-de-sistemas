export default function exercicio39() {
    let numeros: number[] = [];
    let invertidos: number[] = [];

    for (let i = 0; i < 10; i++) {
        numeros[i] = Math.trunc(Math.random() * 100);
    }

    for (let i = numeros.length - 1; i >= 0; i--) {
        invertidos.push(numeros[i]);
    }

    console.log(numeros)
    console.log(invertidos)
}