export default function exercicio40() {
    let maximas: number[] = [];
    let minimas: number[] = [];

    for (let i = 0; i < 30; i++) {
        let valorA = Math.trunc(Math.random() * 23) + 12;
        let valorB = Math.trunc(Math.random() * 23) + 12;

        maximas.push((valorA > valorB) ? valorA : valorB);
        minimas.push((valorA < valorB) ? valorA : valorB);
    }

    console.group()
    console.log(maximas)
    console.log(minimas)
    console.groupEnd()
}