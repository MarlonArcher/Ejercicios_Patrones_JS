class Vehicle {
    constructor(wheeler, type) {
        this.wheeler = wheeler;
        this.type = type;
    }
    getWheeler() {
        return this.wheeler;
    }
    getType() {
        return this.type;
    }
    description() {
        return `This vehicle has ${this.wheeler} wheels and is a ${this.type}`
    }
}

class Monocyrcle extends Vehicle {
    constructor() {
        super(1, "Monocycle");
    }
}
class Car extends Vehicle {
    constructor() {
        super(4, "Car");
    }
}
class Trailer extends Vehicle {
    constructor() {
        super(6, "Trailer");
    }
}
export { Monocyrcle, Car, Trailer };