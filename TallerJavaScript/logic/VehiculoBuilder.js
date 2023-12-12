import { Vehiculo } from "./vehiculo.js";

class IVehiculoBuilder {
    constructor(vehiculo) {
        if (new.target === IVehiculoBuilder) {
            throw new TypeError("No puedes instanciar la clase abstracta directamente.");
        }
        this.vehiculo = vehiculo;
    }

    getVehiculo() {
        return this.vehiculo;
    }

    buildMotor() {
    }

    buildRueda() {
    }

    buildNombre(){}

    buildCarroceria() {
    }
    
}

class CarroBuilder extends IVehiculoBuilder {
    constructor() {
        super(new Vehiculo());
    }

    buildNombre(){
        this.vehiculo.setNombre( "Carro");

    }

    buildMotor() {
        this.vehiculo.setMotor("Motor de carro");
    }

    buildRueda() {
        this.vehiculo.setRueda("Rueda de carro");
    }

   

    buildCarroceria() {
        this.vehiculo.setCarroceria("Carroceria de carro");
    }
}

class MotoBuilder extends IVehiculoBuilder {
    constructor() {
        super(new Vehiculo());
    }

    buildNombre(){
        this.vehiculo.setNombre( "Moto");
    }

    buildMotor() {
        this.vehiculo.setMotor("Motor de moto");
    }

    buildRueda() {
        this.vehiculo.setRueda("Rueda de moto");
    }

    
    buildCarroceria() {
        this.vehiculo.setCarroceria("Carroceria de moto");
    }
}

export { CarroBuilder, MotoBuilder };