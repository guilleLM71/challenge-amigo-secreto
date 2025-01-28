// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo() {
    // Obtener el valor del input
    const inputNombre = document.getElementById("amigo");
    const nombre = inputNombre.value.trim();

    // Validar que el campo no esté vacío
    if (!nombre) {
        alert("Por favor, escribe un nombre antes de añadir.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el input
    inputNombre.value = "";

    // Mostrar el array actualizado
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    // Obtener el elemento donde se mostrará la lista
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiar la lista antes de actualizarla
    listaAmigos.innerHTML = "";

    // Crear y agregar cada elemento de la lista
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Agrega nombres antes de sortear.");
        return;
    }

    // Elegir un nombre aleatorio del array
    const amigoRandom = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el resultado en el elemento con id "resultado"
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = `🎉 Amigo sorteado: ${amigoRandom}`;
}