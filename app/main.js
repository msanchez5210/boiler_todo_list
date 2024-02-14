import { tareas } from '../assets/data/tareas.js';

window.onload = () => {
    let lista = document.querySelector("#lista");

    function agregarElementoTarea(tarea) {
        let elem = `
            <li class="lista_elemento" id="${tarea.id}">
                <p>${tarea.titulo}</p>
                <button class="btn_cerrar">X</button>
            </li>
        `;
        console.log(elem)
        lista.innerHTML+=elem;
    };

    function agregarNuevaTarea() {
        let nuevaTareaInput = document.getElementById('nuevaTarea');
        let nuevaTarea = nuevaTareaInput.value.trim();

        if (nuevaTarea !== "") {
            let elemento = {titulo: nuevaTarea};
            agregarElementoTarea(elemento);
            nuevaTareaInput.value = "";
        }
    };

    tareas.forEach((tarea) => {
        agregarElementoTarea(tarea);
    });

    let formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        agregarNuevaTarea();
    });
};

