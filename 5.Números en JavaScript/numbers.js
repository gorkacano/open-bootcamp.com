const heightInCentimeters = parseInt(180);
const heightInMeters = parseFloat(heightInCentimeters/100);
const weightInKilograms = parseFloat(90.6);
const heightInMetersRoundedToUp = Math.round(heightInMeters);
const weightInKilogramsToDown = Math.floor(weightInKilograms);
const maxJsValue = Number.MAX_VALUE;

const isSame = maxJsValue === maxJsValue+1;
const isNotSame = 5 === 6;

console.log(heightInCentimeters);
console.log(heightInMeters);
console.log(weightInKilograms);
console.log(heightInMetersRoundedToUp);
console.log(weightInKilogramsToDown);
console.log(isSame);
console.log(isNotSame);