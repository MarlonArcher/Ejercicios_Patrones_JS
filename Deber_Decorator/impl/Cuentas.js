import { ICuentaBancaria } from '../interface/ICuentaBancaria.js';
export class CuentaAhorro extends ICuentaBancaria {
    #id;
    #cliente;
    #costo;
    constructor(id, cliente, costo) {
        super();
        this.#id = id;
        this.#cliente = cliente;
        this.#costo = costo;
    }
    getId() {
        return this.#id;
    }
    setId(id) {
        this.#id = id;
    }
    getCliente() {
        return this.#cliente;
    }
    setCliente(cliente) {
        this.#cliente = cliente;
    }
    getCosto() {
        return this.#costo;
    }
    setCosto(costo) {
        this.#costo = costo;
    }
    abrirCuenta() {
        console.log("*************");
        console.log("Se abrió una cuenta de ahorros");
        console.log("Cliente: " + this.#cliente);
        console.log("Costo de apertura:" + this.#costo);
    }
}
export class CuentaCorriente extends ICuentaBancaria {
    #id;
    #cliente;
    #costo;
    constructor(id, cliente, costo) {
        super();
        this.#id = id;
        this.#cliente = cliente;
        this.#costo = costo;
    }
    getId() {
        return this.#id;
    }
    setId(id) {
        this.#id = id;
    }
    getCliente() {
        return this.#cliente;
    }
    setCliente(cliente) {
        this.#cliente = cliente;
    }
    getCosto() {
        return this.#costo;
    }
    setCosto(costo) {
        this.#costo = costo;
    }
    abrirCuenta() {
        console.log("*************");
        console.log("Se abrió una cuenta corriente");
        console.log("Cliente: " + this.#cliente);
        console.log("Costo de apertura:" + this.#costo);
    }
}