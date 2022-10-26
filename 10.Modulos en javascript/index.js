import chalk from 'chalk';
import { multiplicacion, suma } from './controller.js';

const suma1 = suma(1,2);
const suma2 = suma(4,5);

const multi = multiplicacion(suma1, suma2);

console.log(chalk.bgGreen(multi));