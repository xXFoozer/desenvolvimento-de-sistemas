import leia from 'readline-sync';
import exercicio09 from './exercicio09';
import exercicio10 from './exercicio10';
import exercicio11 from './exercicio11';
import exercicio12 from './exercicio12';
import exercicio13 from './exercicio13';
import exercicio19 from './exercicio19';
import exercicio20 from './exercicio20';
import exercicio21 from './exercicio21';
import exercicio22 from './exercicio22';
import exercicio23 from './exercicio23';
import exercicio25 from './exercicio25';
import exercicio27 from './exercicio27';
import exercicio28 from './exercicio28';
import exercicio35 from './exercicio35';
import exercicio15 from './exercicio15';
import exercicio16 from './exercicio16';
import exercicio17 from './exercicio17';
import exercicio18 from './exercicio18';
import exercicio29 from './exercicio29';
import exercicio30 from './exercicio30';
import exercicio31 from './exercicio31';
import exercicio32 from './exercicio32';
import exercicio33 from './exercicio33';
import exercicio34 from './exercicio34';
import exercicio36 from './exercicio36';
import exercicio37 from './exercicio37';
import exercicio38 from './exercicio38';
import exercicio39 from './exercicio39';
import exercicio40 from './exercicio40';
import exercicio41 from './exercicio41';

let opcao = leia.keyInSelect([
    "Exercicio 09",
    "Exercicio 10",
    "Exercicio 11",
    "Exercicio 12",
    "Exercicio 13",
    "Exercicio 15",
    "Exercicio 16",
    "Exercicio 17",
    "Exercicio 18",
    "Exercicio 19",
    "Exercicio 20",
    "Exercicio 21",
    "Exercicio 22",
    "Exercicio 23",
    "Exercicio 25",
    "Exercicio 27",
    "Exercicio 28",
    "Exercicio 29",
    "Exercicio 30",
    "Exercicio 31",
    "Exercicio 32",
    "Exercicio 33",
    "Exercicio 34",
    "Exercicio 35",
    "Exercicio 36",
    "Exercicio 37",
    "Exercicio 38",
    "Exercicio 39",
    "Exercicio 40",
    "Exercicio 41",
]) + 1;

const exercicios = {
    1: exercicio09,
    2: exercicio10,
    3: exercicio11,
    4: exercicio12,
    5: exercicio13,
    6: exercicio15,
    7: exercicio16,
    8: exercicio17,
    9: exercicio18,
    10: exercicio19,
    11: exercicio20,
    12: exercicio21,
    13: exercicio22,
    14: exercicio23,
    15: exercicio25,
    16: exercicio27,
    17: exercicio28,
    18: exercicio29,
    19: exercicio30,
    20: exercicio31,
    21: exercicio32,
    22: exercicio33,
    23: exercicio34,
    24: exercicio35,
    25: exercicio36,
    26: exercicio37,
    27: exercicio38,
    28: exercicio39,
    29: exercicio40,
    30: exercicio41,
} as { [key: number]: () => void };

exercicios[opcao]();