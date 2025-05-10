"use strict";

const taskList = document.querySelector(".js-task-list");
const inputTarea = document.querySelector(".js-input-1");
const botonAgregar = document.querySelector(".js-btn-1");
const inputBuscador = document.querySelector(".js-input-2");
const botonBuscar = document.querySelector(".js-btn-2");

const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];

function paintTask() {
  taskList.innerHTML = "";
  for (const task of tasks) {
    /* taskList.innerHTML += `<li><input type="checkbox" id=${task.id} name="task"> ${task.name}</li>`; */
    if (task.completed === true){
      taskList.innerHTML += `<li class= "tachado"><input type="checkbox" id=${task.id} name="task" checked> ${task.name}</li>`;
  } else {
      taskList.innerHTML += `<li"><input type="checkbox" id=${task.id} name="task"> ${task.name}</li>`;
  }
  
}
}
paintTask();

const handleClickList = (event) => {
  const taskId = parseInt(event.target.id); // Obtengo el id del checkbox clickado por la usuaria
  if (!taskId) return; // Si no ha pulsado en el checkbox, no queremos hacer nada y salimos de la función
  // Busca la tarea que tenga el id `taskId` en el array `tasks`
  const task = tasks.find((task) => task.id === taskId);
  if (task) {
    // Cambia el estado de la propiedad `completed`
    task.completed = !task.completed;
  }
  // Pinta de nuevo las tareas en el HTML
  paintTask();
};
// Añade el evento al contenedor de la lista
taskList.addEventListener("click", handleClickList);

function handleClickFind(){
  const valorBuscar = inputBuscador.value;

  
}

botonBuscar.addEventListener("click", handleClickFind)


  










 