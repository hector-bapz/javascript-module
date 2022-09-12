function Dinosaurio(nombre, tipoAlimentacion, clasificacionReproductora, habitat){
    this.nombre = nombre,
    this.tipoAlimentacion = tipoAlimentacion,
    this.clasificacionReproductora = clasificacionReproductora,
    this.habitat = habitat,
    this.comer = (comida) => {
        return "Este dinosaurio come " + comida
    }
}

let trex = new Dinosaurio("T-rex", "carnivoro", "oviviparo")
let trexComiendo = trex.comer('otros animales')

console.log(trex)
console.log(trexComiendo)