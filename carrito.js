function agregarCarrito(nombre, precio) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarMensaje("✅ " + nombre + " agregado al carrito.");
}

function mostrarMensaje(texto) {

    const mensaje = document.getElementById("mensaje-carrito");

    if (!mensaje) return;

    mensaje.textContent = texto;
mensaje.classList.add("mostrar");

clearTimeout(mensaje.timeout);

mensaje.timeout = setTimeout(function () {
    mensaje.classList.remove("mostrar");
}, 5000);
}

function mostrarCarrito() {

    const lista = document.getElementById("lista-carrito");

    if (!lista) return;

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    lista.innerHTML = "";

    if (carrito.length === 0) {
        lista.innerHTML = "<li class='carrito-vacio'>Tu carrito está vacío.</li>";
        document.getElementById("total").textContent = "Total: $0";
        return;
    }

    let total = 0;

    carrito.forEach(function(producto){

        const li = document.createElement("li");
        li.textContent = producto.nombre + " - $" + producto.precio;

        lista.appendChild(li);

        total += producto.precio;
    });

    document.getElementById("total").textContent = "Total: $" + total;
}

function vaciarCarrito() {

    localStorage.removeItem("carrito");
    mostrarCarrito();

    mostrarMensaje("🗑️ Se vació el carrito.");
}

mostrarCarrito();
