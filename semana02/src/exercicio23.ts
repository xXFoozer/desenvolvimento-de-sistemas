export default function exercicio23() {
    var valor = 0.33;

    for (let i = 1; i <= 500; i++) {
        console.table(`${i} CÓPIAS = R$${(i * valor).toFixed(2)}`);
    }

}