function Animal(tieneOjos, ojos, corazon){
    this.tieneOjos = tieneOjos;
    this.ojos = ojos;
    this.corazon = corazon
    this.comer = (comida) => {
        console.log(`Este animal come esto: ${comida}`)
    }
}

const serpiente = new Animal(true, 2, true)
const gato = new Animal(true, 2, true, 'gris')
console.log(gato.corazon)
gato.comer('wiskas')

class Animal {
    constructor(tieneOjos, ojos, corazon){
        this.tieneOjos = tieneOjos;
        this.ojos = ojos;
        this.corazon = corazon;
    }

    comer(comida){
        return `Este animal come esto: ${comida}`
    }
}

class Oviparo extends Animal {
    constructor(tieneOjos, ojos, tieneCorazon, naceDeHuevo){
        super(tieneOjos, ojos, tieneCorazon); // es obligatorio mandar llamar a la funcion "super"
        this.naceDeHuevo = naceDeHuevo
    }
}

class Reptil extends Oviparo {
    constructor(tieneOjos, ojos, tieneCorazon, naceDeHuevo, seArrastra){ // todos los parámetros tanto del padre como del hijo
        super(tieneOjos, ojos, tieneCorazon, naceDeHuevo) // todos los parámetros del padre
        this.seArrastra = seArrastra // aqui ya se usan los hijos
    }
}

const perro = new Animal(true, 2, true);
console.log(perro.corazon)
let texto = perro.comer('dogchow')
console.log(texto)

const ave = new Oviparo(true, 2, true, false);
console.log(ave)

const squirtle = new Oviparo(true, 2, true, false);
console.log(squirtle)

const otroAnimalRaro = new Oviparo(true, 2, true, false);
console.log(otroAnimalRaro)