class Empleado{
    #nombre;
    #departamento;
    constructor(nombre, departamento){
        if(this.constructor == Empleado){
            throw new Error("No se puede instanciar la clase abstracta");
        }
        this.#nombre = nombre;
        this.#departamento = departamento;
    }
    ObtenerBonificacion(){
        throw new Error("Debo implementar solo en clases hijas");
    }
}
class Administrador extends Empleado{
    ObtenerBonificacion(){
        console.log("Bonificacion del 10%");
    }
}
class Operaciones extends Empleado{
    ObtenerBonificacion(){
        console.log("Bonificacion del 8%");
    }
}
class gerente extends Empleado{
}
const objAdmin = new Administrador("Juan", "Sistemas");
objAdmin.ObtenerBonificacion();
const objOp = new Operaciones("Pedro", "Maquinaria");
objOp.ObtenerBonificacion();
/*const objGe = new gerente("Maria", "Gerencia");
objGe.ObtenerBonificacion();*/
const objEmp = new Empleado("Luis", "Ventas");
console.log(objEmp);
objEmp.ObtenerBonificacion();