
//scope: es el alcance de una variable. depende de si se usa en una función o fuera de ella.
let variableGlobal;
//esta variable es global. abarca TODO EL DOCUMENTO. dentro y fuera de funciones. pero su alcance es hasta este documnto.

function saludar(){
    let variableLocal = 10;
    //esta variable es local. abarca SOLO DENTRO DE LA FUNCIÓN. fuera de ella no existe.
    console.log(variableGlobal, variableLocal);
}

saludar();