// ==================== BUSCADOR DE PRODUCTOS ====================

const buscador = document.getElementById("buscarProducto");
const categoria = document.getElementById("categoriaProducto");

const productos = document.querySelectorAll(".producto");
const sinResultados = document.getElementById("sinResultados");


function buscarProductos() {

    const texto = buscador.value.toLowerCase();
    const categoriaSeleccionada = categoria.value;

    let encontrados = 0;


    productos.forEach(function(producto) {

        const nombre = producto.dataset.nombre.toLowerCase();
        const categoriaProducto = producto.dataset.categoria;


        const coincideNombre =
            nombre.includes(texto);

        const coincideCategoria =
            categoriaSeleccionada === "todos" ||
            categoriaProducto === categoriaSeleccionada;


        if (coincideNombre && coincideCategoria) {

            producto.style.display = "block";

            encontrados++;

        } else {

            producto.style.display = "none";

        }

    });


    if (encontrados === 0) {

        sinResultados.style.display = "block";

    } else {

        sinResultados.style.display = "none";

    }

}


// Buscar mientras el usuario escribe
buscador.addEventListener(
    "input",
    buscarProductos
);


// Filtrar por categoría
categoria.addEventListener(
    "change",
    buscarProductos
);