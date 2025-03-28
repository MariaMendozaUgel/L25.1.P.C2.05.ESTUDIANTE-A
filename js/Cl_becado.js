import Cl_estudiante from "./Cl_estudiante.js";

export default class Cl_becado extends Cl_estudiante {
    constructor(nombre, acumNotas, cantMaterias) {
        super(nombre, acumNotas, cantMaterias)
    }
    notaPromedio() {
        return this.acumNotas / this.cantMaterias;
    }
    beca(){
        if (this.notaPromedio() > 15)
            return 30;
        if (this.notaPromedio() > 10 <=15)
            return 20;
        else return 0
    }
}