
//DOM

let contenedor = document.getElementById("container");
let promociones = [
    { id: 1, nombre: "Río de Janeiro", precio: 71.420 },    
    { id: 2, nombre: "Salvador de Bahía", precio: 89.383 },
    { id: 3, nombre: "San Andrés", precio: 136.665 },
  ];

  for (const promocion of promociones){
            let li = document.createElement ("li");
            li.className = "fuente"
            li.innerHTML =  `<h2>ID: ${promocion.id}</h2>
            <p>Producto: ${promocion.nombre}</p>
            <b>$${promocion.precio}</b>`;
            contenedor.append(li);
  }

