import singletonCounter from "./counter.js";

const button = document.getElementById("blue");
button.addEventListener("click", () => {
    singletonCounter.increaseCounter();
    console.log("Contador total: " + singletonCounter.getCounter());
});