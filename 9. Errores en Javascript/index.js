const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log'})
  ]
});

logger.error("Este es un error mostrado en consola");

try{
  const randomNumber = Math.floor(Math.random()*10);
  if(randomNumber%2 !== 0){ throw new Error("El numero generado no es par o 0"); }
  console.log(randomNumber);
}
catch(e){
  logger.error(e);
}