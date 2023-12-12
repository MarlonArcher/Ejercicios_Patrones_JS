class Persona{
    #nombre; //Atributo privado
    #edad;
    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }
    getNombre(){
        return this.#nombre;
    }
    //set setNombre(nombre){ //el prefijo set convierte el metodo en atributo del objeto
    //    this.#nombre = nombre;
    //}
    setNombre(nombre){
        this.#nombre = nombre;
    }
    cantar(){
        return `${this.#nombre} sabe cantar`;
    }
}

const p1 = new Persona("William", 20);
console.log(p1.getNombre());
p1.setNombre("Jair");
//p1.setNombre = "Jair";
console.log(p1.getNombre());

//herencia
class Estudiante extends Persona{
    #asignatura;
    constructor(nombre, edad, asignatura){
        super(nombre, edad);
        this.#asignatura = asignatura;
    }
    estudiar(){
        return `${this.getNombre()} estudia ${this.#asignatura}`;
    }
    //sobreescritura
    cantar(){
        return `${super.cantar()} y estudia ${this.#asignatura}`;
    }
}
console.log("Herencia");
const estudiante1 = new Estudiante("William", 20, "Matematicas");
console.log(estudiante1.getNombre());
console.log(estudiante1.estudiar());
console.log(estudiante1.cantar());
console.log(estudiante1);