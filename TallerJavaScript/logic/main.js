import DirectorVehiculo from "./Director.js";
import {CarroBuilder,MotoBuilder} from "./VehiculoBuilder.js";


document.addEventListener('DOMContentLoaded', (event) => {
    
let directorCarro = new DirectorVehiculo(new CarroBuilder());

directorCarro.buildVehiculo();

console.log(directorCarro.getVehiculo().toString());

let directorMoto = new DirectorVehiculo(new MotoBuilder());

directorMoto.buildVehiculo();


    
    const tabla = document.getElementById("tabla");
    const fila = document.createElement("tr");
    fila.classList.add("border-b", "border-blue-gray-200");

    const row = `
    <td class="py-3 px-4">${directorCarro.getVehiculo().getNombre()}</td>
    <td class="py-3 px-4">${directorCarro.getVehiculo().getMotor()}</td>
    <td class="py-3 px-4">${directorCarro.getVehiculo().getRueda()}</td>
    <td class="py-3 px-4">${directorCarro.getVehiculo().getCarroceria()}</td>
    <td class="py-3 px-4">
      <button id='btncarro' class="font-medium text-blue-600 hover:text-blue-800">Clonar</button>
    </td>
  `;

    fila.innerHTML = row;

    tabla.appendChild(fila);

    
    directorMoto.buildVehiculo();

    const fila2 = document.createElement("tr");
    fila2.classList.add("border-b", "border-blue-gray-200");

    const row2 = `
    <td class="py-3 px-4">${directorMoto.getVehiculo().getNombre()}</td>
    <td class="py-3 px-4">${directorMoto.getVehiculo().getMotor()}</td>
    <td class="py-3 px-4">${directorMoto.getVehiculo().getRueda()}</td>
    <td class="py-3 px-4">${directorMoto.getVehiculo().getCarroceria()}</td>
    <td class="py-3 px-4">
      <button id='btnmoto' class="font-medium text-blue-600 hover:text-blue-800">Clonar</button>
    </td>
  `;

    fila2.innerHTML = row2;
    tabla.appendChild(fila2);



    

const btnMoto = document.getElementById("btnmoto");

btnMoto.addEventListener("click", () => {
    
    
    
    const fila = document.createElement("tr");
    fila.classList.add("border-b", "border-blue-gray-200");

    let clone = directorMoto.getVehiculo().clone();

    const row = `
    <td class="py-3 px-4">${clone.getNombre()}</td>
    <td class="py-3 px-4">${clone.getMotor()}</td>
    <td class="py-3 px-4">${clone.getRueda()}</td>
    <td class="py-3 px-4">${clone.getCarroceria()}</td>
    <td class="py-3 px-4">
      <button  class="font-medium text-blue-600 hover:text-blue-800"></button>
    </td>
  `;

    fila.innerHTML = row;

    tabla.appendChild(fila);

    }
)
;


const btnCarro = document.getElementById("btncarro");

btnCarro.addEventListener("click", () => {
    
    
    const fila = document.createElement("tr");
    fila.classList.add("border-b", "border-blue-gray-200");

    let clone = directorCarro.getVehiculo().clone();

    const row = `
    <td class="py-3 px-4">${clone.getNombre()}</td>
    <td class="py-3 px-4">${clone.getMotor()}</td>
    <td class="py-3 px-4">${clone.getRueda()}</td>
    <td class="py-3 px-4">${clone.getCarroceria()}</td>
    <td class="py-3 px-4">
      <button  class="font-medium text-blue-600 hover:text-blue-800"></button>
    </td>
  `;

    fila.innerHTML = row;

    tabla.appendChild(fila);

    }
)
;
});