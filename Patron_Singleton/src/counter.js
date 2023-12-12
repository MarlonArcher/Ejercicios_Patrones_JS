class Counter {
    #instance = 0;
    #counter = 0;
    costructor() {
        if (!this.#instance) {
            throw new Error("Tu solo puedes crear una instancia");
        } else {
            this.#instance = this;
        }
    }
    getInstance() {
        return this.#instance;
    }
    getCounter() {
        return this.#counter;
    }
    increaseCounter() {
        return this.#counter++;
    }
    decreaseCounter() {
        return this.#counter--;
    }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;