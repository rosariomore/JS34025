const modalContenedor = document.querySelector('.modal-container')
const abrirCarrito = document.getElementById('open')
const cerrarCarrito = document.getElementById('cerrar')
const finalizarCarrito = document.getElementById('finalizar')

// CLICK PARA ABRIR EL CARRITO - EN EL HEADER
abrirCarrito.addEventListener('click', ()=>{
    modalContenedor.classList.toggle('modal-active')
})

// CLICK BOTON CERRAR EN EL CARRITO - EN EL MODAL
cerrarCarrito.addEventListener('click', ()=>{
    modalContenedor.classList.remove('modal-active')
})


