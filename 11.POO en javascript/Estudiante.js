class Estudiante {
  nombre;
  asignaturas = ['Javascript', 'HTML', 'CSS']; 
  // No entiendo que se pretendia asignando una lista de strings a asignaturas, si despeus se le va a asignar otro valor. 
  // Puede que no haya entendido el enunciado.

  constructor(nombre, asignaturas){
    this.nombre = nombre;
    this.asignaturas = asignaturas;
  }
  obtenDatos(){
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas
    }
  }
}

const estudiante = new Estudiante("Gorka", "Javascript");
console.log(estudiante.obtenDatos());