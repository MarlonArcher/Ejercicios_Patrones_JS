import singletonCounter from "./counter.js";

const button = document.getElementById("green");
button.addEventListener("click", () => {
    singletonCounter.decreaseCounter();
    console.log("Contador total: " + singletonCounter.getCounter());
});