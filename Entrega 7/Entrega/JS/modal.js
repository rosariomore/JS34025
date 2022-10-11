import { eliminarProductoCarrito } from "./carritoIndex.js";

const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('open');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector(".modal-carrito");

// CLICK PARA ABRIR EL CARRITO - EN EL HEADER
abrirCarrito.addEventListener('click', ()=>{
    modalContenedor.classList.toggle('modal-active')
});

// CLICK BOTON CERRAR EN EL CARRITO - EN EL MODAL
cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();

    if (e.target.classList.contains('boton-eliminar')) {
        Swal.fire({
            text: "Desea eliminar este producto?...",
            showCancelButton: true,
            confirmButtonColor: "#43D8CC",
            cancelButtonColor: "#FF7254",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarProductoCarrito(e.target.value)
                Swal.fire(
                    "Listo!",
                    "El producto ha sido eliminado.",
                    "success"
                )
            }
        })
    };
});



