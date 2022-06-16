let number = 10;
let factorial = 1;

while (!isNaN(number)) {
  factorial = number*factorial;
  number--;

  if(number === 0){
    break;
  }
}

console.log(factorial);