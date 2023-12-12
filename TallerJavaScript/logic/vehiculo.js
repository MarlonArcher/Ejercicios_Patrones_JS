
class Vehiculo {
    constructor(nombre ,motor, rueda,  carroceria) {
        this.nombre = nombre;
        this.motor = motor;
        this.rueda = rueda;
        this.carroceria = carroceria;
    }

    getMotor() {
        return this.motor;
    }

    getRueda() {
        return this.rueda;
    }

   
    getCarroceria() {
        return this.carroceria;
    }

    setMotor(motor) {
        this.motor = motor;
    }

    setRueda(rueda) {
        this.rueda = rueda;
    }


    setCarroceria(carroceria) {
        this.carroceria = carroceria;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    toString() {
        return "Motor: " + this.motor + " Rueda: " + this.rueda + " Carroceria: " + this.carroceria + " Nombre: " + this.nombre;
    }

    clone() {
        return new Vehiculo(`Clone ${this.nombre}`,this.motor, this.rueda, this.carroceria);
    }


}

export { Vehiculo};



