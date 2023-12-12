function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.saludar = function(){
    console.log("Hola soy "+ this.nombre+" tengo "+this.edad);
}

function Estudiante(nombre, edad, asignatura){
    Persona.call(this, nombre, edad);
    this.asignatura = asignatura;
}

Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;
Estudiante.prototype.estudiar = function(){
    console.log("El estudiante "+this.nombre+" estudia "+this.asignatura);
}
const estudiante1 = new Estudiante("William", 20, "Matematicas");   
const estudiante2 = new Estudiante("Jair", 22, "Fisica");
estudiante1.saludar();
estudiante2.saludar();
estudiante1.estudiar();
estudiante2.estudiar();
console.log(estudiante1);
console.log(estudiante1 instanceof Estudiante);
console.log(estudiante1 instanceof Persona);