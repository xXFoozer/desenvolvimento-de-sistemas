import leia from 'readline-sync';
import exercicio01 from './exercicio01';
import exercicio02 from './exercicio02';
import exercicio03 from './exercicio03';
import exercicio04 from './exercicio04';
import exercicio05 from './exercicio05';
import exercicio06 from './exercicio06';
import exercicio07 from './exercicio07';
import exercicio08 from './exercicio08';

const opcao = leia.keyInSelect([
    "Exercicio 01",
    "Exercicio 02",
    "Exercicio 03",
    "Exercicio 04",
    "Exercicio 05",
    "Exercicio 06",
    "Exercicio 07",
    "Exercicio 08",
]) + 1;

const exercicios = {
    1: exercicio01,
    2: exercicio02,
    3: exercicio03,
    4: exercicio04,
    5: exercicio05,
    6: exercicio06,
    7: exercicio07,
    8: exercicio08,
} as { [key: number]: () => void};

exercicios[opcao]();