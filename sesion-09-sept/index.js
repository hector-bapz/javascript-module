const input = document.querySelector('input')

input.addEventListener('keypress', (event) =>{
    const key = event.key
    const value = input.value
    console.log(`alguien presiono la tecla ${key} y el valor del input se actualizó a ${value}`)
})