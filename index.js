precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

// recupero elementos
const cantidad = document.querySelector('.cantidad')
const agregar = document.querySelector('#agrega')
const quitar = document.querySelector('#quita')
const total = document.querySelector('.valor-total')

let unidades = 0

agregar.addEventListener("click",()=>{
    unidades = unidades + 1
    cantidad.innerHTML = unidades
    total.innerHTML = unidades * precio
})

quitar.addEventListener("click",()=>{
    unidades = unidades - 1
    cantidad.innerHTML = unidades
    total.innerHTML = unidades * precio
})