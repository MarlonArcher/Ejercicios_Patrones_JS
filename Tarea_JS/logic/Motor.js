class IMotor {
    setPotencia(potencia) {}
    setCilindraje(cilindraje) {}
    getDefinicionMotor() {}
    inyectarCombustible(cantidad) {}
    consumirCombustible() {}
}
class MotorDisel extends IMotor{

    setPotencia(potencia) {
        this.potencia = potencia;
    }

    setCilindraje(cilindraje) {
        this.cilindraje = cilindraje;
    }

    getTypoMotor() {
        return "Motor Diesel";
    }

    getDefinicionMotor() {
        return "Cilindraje: "+this.cilindraje+"----- Potencia: "+this.potencia;
    }

    inyectarCombustible(cantidad) {
        return `Motor Disel: Inyectando ${cantidad}ml de combustible`;
    }

    consumirCombustible() {
        return "Motor Disel realiza combustion de Gasolina";
    }
}
class MotorGasolina extends IMotor{

    setPotencia(potencia) {
        this.potencia = potencia;
    }

    setCilindraje(cilindraje) {
        this.cilindraje = cilindraje;
    }

    getTypoMotor() {
        return "Gasolina";
    }

    getDefinicionMotor() {
        return "Cilindraje: "+this.cilindraje+"----- Potencia: "+this.potencia;
    }

    inyectarCombustible(cantidad) {
        return `Motor Gasolina: Inyectando ${cantidad}ml de combustible`;
    }

    consumirCombustible() {
        return "Motor Gasolina realiza combustion de Gasolina";
    }
}
export {MotorDisel, MotorGasolina};