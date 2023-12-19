export class ICuentaBancaria{
    abrirCuenta() {
        throw new Error("Debo implementar solo en clases hijas");    
    }
    getCosto() {
        throw new Error("Debo implementar solo en clases hijas");    
    }
    setCosto(costo) {
        throw new Error("Debo implementar solo en clases hijas");    
    }
}
