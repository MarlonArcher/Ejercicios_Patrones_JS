import { MotorDisel,MotorGasolina } from "./Motor.js";
const motorDiesel = new MotorDisel();
motorDiesel.setPotencia(150);
motorDiesel.setCilindraje(2000);

console.log(motorDiesel.getDefinicionMotor());
console.log(motorDiesel.inyectarCombustible(50));
console.log(motorDiesel.consumirCombustible());

const motorGasolina = new MotorGasolina();
motorGasolina.setPotencia(120);
motorGasolina.setCilindraje(1800);

console.log(motorGasolina.getDefinicionMotor());
console.log(motorGasolina.inyectarCombustible(40));
console.log(motorGasolina.consumirCombustible());
