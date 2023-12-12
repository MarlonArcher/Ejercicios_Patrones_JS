//import { VehicleFactory } from "./VehicleFactory.js";
// const factory = new VehicleFactory();
// const car = factory.createVehicle(4);
// console.log(car.description());
//Factory con Creadores Concretos
import { MonocycleCreator } from "./MonocycleCreator.js";
import { VehicleFactoryCreator } from "./VehicleFactoryCreator.js";
import { CarCreator } from "./CarCreator.js";
import { TrailerCreator } from "./TrailerCreator.js";
const factory = new VehicleFactoryCreator(new MonocycleCreator());
const Monocycle = factory.createVehicle();
const factory2 = new VehicleFactoryCreator(new CarCreator());
const Car = factory2.createVehicle();
const factory3 = new VehicleFactoryCreator(new TrailerCreator());
const Trailer = factory3.createVehicle();
console.log(Monocycle.description());
console.log(Car.description());
console.log(Trailer.description());