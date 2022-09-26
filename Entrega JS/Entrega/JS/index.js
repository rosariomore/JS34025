
DOM

let contenedor = document.getElementById("container");
let promociones = [
    { id: 1, nombre: "Río de Janeiro", precio: 71.419 },    
    { id: 2, nombre: "Salvador de Bahía", precio: 89.383 },
    { id: 3, nombre: "San Andrés", precio: 136.665 },
    { id: 4, nombre: "Cancún", precio: 144.370 },
    { id: 5, nombre: "Miami", precio: 162.394 },
    { id: 6, nombre: "Punta Cana", precio: 160.427 },
  ];

  for (const promocion of promociones){
            let li = document.createElement ("li");
            li.className = "fuente"
            li.innerHTML =  `<h2>ID: ${promocion.id}</h2>
            <p>Producto: ${promocion.nombre}</p>
            <b>$${promocion.precio}</b>`;
            contenedor.append(li);
  }
