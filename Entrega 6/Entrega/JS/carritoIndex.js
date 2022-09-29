import { productos } from "./stock.js";

let carritoDeCompras = []

export const carritoIndex = (productoId) =>{

    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const renderProductosCarrito = ()=>{

        let producto = productos.find( producto => producto.id == productoId)
        carritoDeCompras.push(producto)

        producto.cantidad = 1;

        let div = document.createElement ("div")

        div.classList.add("productoCarrito")
        div.innerHTML= `<p>${producto.nombre}</p>
                        <p>Precio: $${producto.precio}</p> 
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        `
        contenedorCarrito.appendChild(div)

    // calculo totales
    const precioPedido = carritoDeCompras.reduce((acumulador, precio) => acumulador + (precio.precio * precio.cantidad), 0)

    // actualizo total en el modal
    let totalPedido = document.getElementById("elTotal");
    totalPedido.innerHTML = `Total: $${precioPedido}`;

    // actualizo contador de cantidad en el header
    const cantidad = carritoDeCompras.reduce((acumulador, precio) => acumulador + (precio.cantidad), 0);
    let cantidadPedido = document.getElementById("contador-carrito");
    cantidadPedido.innerHTML = `${cantidad}`;

    // actualizo local storage
    localStorage.setItem("carritoET", JSON.stringify(carritoDeCompras));

    }
    renderProductosCarrito()

}
