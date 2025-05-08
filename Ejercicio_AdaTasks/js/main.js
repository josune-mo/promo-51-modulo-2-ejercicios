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
      taskList.innerHTML += `<li class= "tachado"><input type="checkbox" id=${task.id} name="task"> ${task.name}</li>`;
  } else {
      taskList.innerHTML += `<li"><input type="checkbox" id=${task.id} name="task"> ${task.name}</li>`;
  }
  
}
}
paintTask();

function handleClickFind(){
  const valorBuscar = inputBuscador.value;
  
}

botonBuscar.addEventListener("click", handleClickFind)


  










 