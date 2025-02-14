export default function exercicio41() {
    let pai: number[] = []
    let mae: number[] = []
    let filho: number[] = []

    for (let i = 0; i < 10; i++) {
        pai[i] = Math.trunc(Math.random() * 100);
        mae[i] = Math.trunc(Math.random() * 100);

        filho[i] = (i % 2 === 0) ? pai[i] : mae[i];
    }

    console.group()
    console.log(pai)
    console.log(mae)
    console.log(filho)
    console.groupEnd()
}