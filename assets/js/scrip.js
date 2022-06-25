let precio = 400000
let precioSpan = document.querySelector(".precio");
precioSpan.innerHTML = precio.toLocaleString();
let cantidadInput = document.querySelector("input[type='number']")
let colorInput = document.querySelector("input[type='text']")


let precioFinal = document.querySelector(".precio-final")
let cantidadTotal = document.querySelector(".cantidad-total")
let color = document.querySelector(".color div")
let total = 0
let input = document.querySelector("#colores")

function final_valor(){

    const {value: cantidad} = cantidadInput
    const { value: color } = colorInput
    precioFinal.innerHTML = (+cantidad * precio).toLocaleString();
    cantidadTotal.innerHTML = cantidad
    let circle = document.querySelector('.p-1');
    circle.style.backgroundColor = color 
    
    
    
}
