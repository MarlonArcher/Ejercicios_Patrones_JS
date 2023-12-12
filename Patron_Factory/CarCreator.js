import { Car } from "./Vehicle.js";
class CarCreator {
    createVehicle() {
        return new Car();
    }
}
export { CarCreator };