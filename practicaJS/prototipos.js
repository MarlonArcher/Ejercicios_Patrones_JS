function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}
Persona.prototype.cantar = function(){
    console.log(this.nombre+" Sabe cantar")
}
Persona.prototype.saluda = function(){
    console.log("Hola soy "+ this.nombre+" tengo "+this.edad);
}
const p1 = new Persona ("William",20);
const p2 = new Persona ("Jair",22);
console.log(p1);
console.log(p2)
p1.saluda();
p2.cantar();