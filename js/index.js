import Cl_estudiante from "./Cl_estudiante.js";
import Cl_becado from "./Cl_becado.js"

let estudiante1 = new Cl_estudiante ("Alirio", 315, 35)
let becado1 = new Cl_becado ("Mary", 132, 8)

let salida = document.getElementById("salida")

salida.innerHTML = `
El estudiante ${estudiante1.nombre} tiene un caumulado de notas de ${estudiante1.acumNotas} y una cantidad de materias de ${estudiante1.cantMaterias} <br>
nota promedio : ${estudiante1.notaPromedio()} <br> <br>
El estudiante ${becado1.nombre} tiene un acumulado de notas de ${becado1.acumNotas} y una cantidad de materias de ${becado1.cantMaterias}<br>
nota promedio: ${becado1.notaPromedio()} <br><br>
le corresponde por beca: ${becado1.beca()}$`;
