import { actualizarTotalesCarrito } from "./actualizarCarrito.js";
import { productos } from "./stock.js";

let carrito = []

const validarProductoRepetido = (productoId) =>{
    const productoRepetido = carrito.find(producto=> producto.id === productoId);

    if (productoRepetido) {
        productoRepetido.cantidad++;
        const cantidadProducto = document.getElementByI(`cantidad${productoRepetido.id}`);
        cantidadProducto.innerText = `cantidad${productoRepetido.cantidad}`;
        actualizarTotalesCarrito(carrito);
    } else {
        agergarAlCarrito(productoId);
        }
};

const agergarAlCarrito = (productoId) => {
    const contenedor = document.getElementById ("carrito-contenedor");
    const producto = productos.find(producto => producto.id === productoId);
    carrito.push(producto);

    const div = document.createElement("div");
    div.classList.add("productoEnCarrito");
    div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio: $${producto.precio}</p> 
                    <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                    <button id=emiminar${producto.id} value="${producto.id}" class="btn waves-effect waves-ligth boton-elimiar">X</button>
                    `;
    contenedor.appendChild(div);
    actualizarTotalesCarrito(carrito);

    
};

export{ agergarAlCarrito, validarProductoRepetido};