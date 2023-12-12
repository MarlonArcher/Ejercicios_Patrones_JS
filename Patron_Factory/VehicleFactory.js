import { Monocyrcle, Car, Trailer  } from "./Vehicle.js";
class VehicleFactory{
    createVehicle(wheeler){
        switch(wheeler){
            case 1:
                return new Monocyrcle();
            case 4:
                return new Car();
            case 6:
                return new Trailer();
            default:
                console.log("No vehicle with that number of wheels");
        }
    }
}
export {VehicleFactory};