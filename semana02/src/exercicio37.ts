export default function exercicio37() {
    let numeros: number[] = [];
    for (let i = 0; i < 10; i++) {
        numeros[i] = Math.trunc(Math.random() * 100);
    }

    // let pares = numeros.filter((numero) => numero % 2 === 0);

    let pares2: number[] = [];
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares2.push(numeros[i])
        }
    }

    console.log(numeros);
    console.log(pares2);

}