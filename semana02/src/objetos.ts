let vetor = [];

let objeto = {
    name: "Joãozinho",
    dt_nascimento: "10/10/2010",
    nacionalidade: 'Brasileiro',
    cidades: ["TIJUCAS", "PORTO BELO", "FLORIPA"],
    acao: function (teste: string) { console.log(teste) }
}

objeto.acao("FOI EXECUTADA")

let objeto2 = {
    name: "valentina",
    dt_nascimento: "10/10/2010",
    nacionalidade: 'Brasileiro',
    cidades: ["TIJUCAS", "PORTO BELO", "FLORIPA"],
}

vetor[0] = objeto;
vetor[1] = objeto2;

for (let i = 0; i < vetor.length; i++) {
    console.log(vetor[i].cidades)

    for (let j = 0; j < vetor[i].cidades.length; j++) {
        console.log(vetor[i].cidades[j]);
    }
}

vetor.forEach((pessoa) => {
    console.log(pessoa.cidades)
    pessoa.cidades.forEach(cidade => {
        console.log(cidade)
    })
})

