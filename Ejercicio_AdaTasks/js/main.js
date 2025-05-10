"use strict";

const taskList = document.querySelector(".js-task-list");
const inputTarea = document.querySelector(".js-input-1");
const botonAgregar = document.querySelector(".js-btn-1");
const inputBuscador = document.querySelector(".js-input-2");
const botonBuscar = document.querySelector(".js-btn-2");

const GITHUB_USER = "josune-mo";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;
let tasks = [];

function getData() {
  fetch(SERVER_URL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      tasks = data.results;
      paintTask(tasks);
    })
    .catch(error => taskList.innerHTML = `<li>${error}</li>`);
  }

getData();

function paintTask(tasks) {
  taskList.innerHTML = "";
  for (const task of tasks) {
    if (task.completed === true) {
      taskList.innerHTML += `<li class= "tachado"><input type="checkbox" id=${task.id} name="task" checked> ${task.name}</li>`;
    } else {
      taskList.innerHTML += `<li"><input type="checkbox" id=${task.id} name="task"> ${task.name}</li>`;
    }
  }
}
paintTask(tasks);

const handleClickList = (event) => {
  const taskId = parseInt(event.target.id);
  if (!taskId) return;
  const task = tasks.find((task) => task.id === taskId);
  if (task) {
    task.completed = !task.completed;
  }
  paintTask(tasks);
};
taskList.addEventListener("click", handleClickList);

function handleClickFind(event) {
  event.preventDefault();
  const valorBuscar = inputBuscador.value;
  const listTasks = tasks.filter((task) => task.name.includes(valorBuscar));
  console.log(listTasks);
  const taskFind = tasks.find((task) => task.name.includes(valorBuscar));
  paintTask(listTasks);
}

botonBuscar.addEventListener("click", handleClickFind);
