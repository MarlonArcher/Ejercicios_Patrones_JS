import singletonCounter from "./counter.js";

const button = document.getElementById("rojo");
button.addEventListener("click", () => {
    singletonCounter.increaseCounter();
    console.log("Contador total: " + singletonCounter.getCounter());
});