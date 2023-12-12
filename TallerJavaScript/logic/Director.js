class DirectorVehiculo{
    constructor(builder){
        this.builder = builder;
    }

    buildVehiculo(){
        this.builder.buildNombre();
        this.builder.buildMotor();
        this.builder.buildCarroceria();
        this.builder.buildRueda();

    }

    getVehiculo(){
        return this.builder.getVehiculo();
    }

    setBuilder(builder){
        this.builder = builder;
    }
}


export default DirectorVehiculo;