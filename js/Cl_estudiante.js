export default class Cl_estudiante {
    constructor(nombre, acumNotas, cantMaterias) {
        this.nombre = nombre;
        this.acumNotas = acumNotas;
        this.cantMaterias = cantMaterias;
    }
    notaPromedio() {
        return this.acumNotas / this.cantMaterias;
    }
}