function allwaysTrue(){
  return true;
}

const helloPromise = new Promise((resolve, reject) => {
  setTimeout( () => resolve(),5000);
});

helloPromise.then(() =>  console.log('Hola soy una promesa') );


function* pairGenerator(){
  let pair = 1;
  while(true){
    pair = pair*2;
    yield pair;
  }
}

const pair = pairGenerator();
console.log(pair.next());
console.log(pair.next());
console.log(pair.next());
console.log(pair.next());
console.log(pair.next());