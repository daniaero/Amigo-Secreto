// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert('Por favor, ingresa un nombre.');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este nombre ya ha sido añadido.');
        return;
    }

    amigos.push(nombre);
    inputAmigo.value = "";
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = '❌';
        botonEliminar.onclick = () => eliminarAmigo(index);
        li.appendChild(botonEliminar);
        listaAmigos.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    mostrarListaAmigos();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Se necesitan al menos 2 amigos para realizar el sorteo.');
        return;
    }

    let amigosSorteo = [...amigos];
    let resultado = {};

    amigos.forEach(amigo => {
        let posiblesAmigos = amigosSorteo.filter(a => a !== amigo);

        if (posiblesAmigos.length === 0) {
            alert('No se pudo realizar el sorteo sin que alguien se autoasigne. Intenta nuevamente.');
            return;
        }

        const elegido = posiblesAmigos[Math.floor(Math.random() * posiblesAmigos.length)];
        resultado[amigo] = elegido;
        amigosSorteo = amigosSorteo.filter(a => a !== elegido);
    });

    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = "";

    for (const [amigo, asignado] of Object.entries(resultado)) {
        const li = document.createElement('li');
        li.textContent = `${amigo} → ${asignado}`;
        listaResultado.appendChild(li);
    }
}