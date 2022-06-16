let number = 10;
let factorial = 1;

while (number > 0) {
  factorial = number*factorial;
  number--;
}

console.log(factorial);