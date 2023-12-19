import { ICuentaBancaria } from '../interface/ICuentaBancaria.js';
class CuentaDecorator extends ICuentaBancaria {
    constructor(cuentaDecorada) {
        super();
        this.cuentaDecorada=cuentaDecorada;
    }
    getCosto() {
        return this.cuentaDecorada.getCosto();
    }
    setCosto(costo) {
        return this.cuentaDecorada.setCosto(costo);
    }
}
export class PagosDecorator extends CuentaDecorator{
    constructor(cuentaDecorada){
        super(cuentaDecorada);
    }
    abrirCuenta(){
        this.agregarPago()
        return this.cuentaDecorada.abrirCuenta();
    }
    agregarPago(){
        let costo = this.cuentaDecorada.getCosto()+0.50;
        this.cuentaDecorada.setCosto(costo);
        console.log("Se agregó el servicio de Pagos. \nCon un costo adicional de $0.5");
        console.log("Los costos de la cuenta ascienden a: $" + costo);
    }
}
export class SegurosDecorator extends CuentaDecorator{
    constructor(cuentaDecorada){
        super(cuentaDecorada);
    }
    abrirCuenta(){
        this.agregarSeguro();
        return this.cuentaDecorada.abrirCuenta();
    }
    agregarSeguro(){
        let costo = this.cuentaDecorada.getCosto()+30;
        this.cuentaDecorada.setCosto(costo);
        console.log("Se agregó el servicio de Seguros. \nCon un costo adicional de $30");
        console.log("Los costos de la cuenta ascienden a: $" + costo);
    }
}