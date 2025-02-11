import leia from 'readline-sync';
import exercicio09 from './exercicio09';
import exercicio10 from './exercicio10';
import exercicio11 from './exercicio11';
import exercicio12 from './exercicio12';
import exercicio13 from './exercicio13';
import exercicio19 from './exercicio19';

const VALOR_INICIAL = 8;

const opcao = leia.keyInSelect([
    "Exercicio 09",
    "Exercicio 10",
    "Exercicio 11",
    "Exercicio 12",
    "Exercicio 13",
    "Exercicio 19",
]) + 1 + VALOR_INICIAL;

const exercicios = {
    9: exercicio09,
    10: exercicio10,
    11: exercicio11,
    12: exercicio12,
    13: exercicio13,
    14: exercicio19,
} as { [key: number]: () => void };

exercicios[opcao]();