import { tasks, Task, myTask, loopTasks } from "./task";
import { format } from "date-fns";

function createInbox(project) {
  const inbox = document.createElement("div");
  const titlebar = document.createElement("div");
  const title = document.createElement("h2");
  const search = document.createElement("input");
  const taskbar = document.createElement("div");
  const className = project.replace(/\s+/g, "").toLowerCase();

  titlebar.classList.add("titlebar")
  search.classList.add("searchForTask");
  search.type = "search";
  search.setAttribute("placeholder", "Search for task...");
  search.addEventListener("input", searchForTask, false);
  taskbar.classList.add("taskbar");
  title.textContent = project;
  inbox.classList.add(className, "main");

  titlebar.appendChild(title);
  titlebar.appendChild(search);
  inbox.appendChild(titlebar);
  inbox.appendChild(taskbar);
  inbox.appendChild(createTaskBtn(project));

  return inbox;
}

function createTaskBtn(project) {
  const addTaskBtn = document.createElement("input");

  addTaskBtn.setAttribute("type", "button");
  addTaskBtn.setAttribute("value", "+ Add Task");
  addTaskBtn.setAttribute("class", "addTaskBtn");
  addTaskBtn.addEventListener(
    "click",
    function () {
      addTask(project);
    },
    false
  );

  return addTaskBtn;
}

function addTask(project) {
  const inbox = document.getElementsByClassName("main")[0];
  const addTaskBtn = document.getElementsByClassName("addTaskBtn")[0];
  const container = document.createElement("div");
  container.classList.add("addTask");
  const input = document.createElement("input");
  const date = document.createElement("input");
  const add = document.createElement("input");
  const cancel = document.createElement("input");

  input.setAttribute("class", "input");
  date.setAttribute("class", "date");

  input.setAttribute("type", "input");
  date.setAttribute("type", "date");
  add.setAttribute("type", "button");
  cancel.setAttribute("type", "button");

  input.setAttribute("placeholder", "e.g. Wash dishes");
  add.setAttribute("value", "Add");
  cancel.setAttribute("value", "Cancel");

  add.addEventListener(
    "click",
    function () {
      try {
        getTask(project);
      } catch(err) {
        alert("Please enter a valid date!");
      }
    },
    false
  );
  cancel.addEventListener(
    "click",
    function () {
      cancelTask(project);
    },
    false
  );

  container.appendChild(input);
  container.appendChild(date);
  container.appendChild(add);
  container.appendChild(cancel);

  inbox.replaceChild(container, addTaskBtn);
}

function getTask(project) {
  const input = document.getElementsByClassName("input")[0];
  const date = document.getElementsByClassName("date")[0];
  const inputValue = input.value;
  const dateValue = format(new Date(date.value), "dd/MM/yyyy");
  const id = (inputValue + dateValue).replace(/\s+/g, "").toLowerCase();

  const newTask = new Task(inputValue, dateValue, false, id, project);
  if (inputValue && date) {
    myTask(newTask);
    loopTasks(tasks, project);
    cancelTask(project);
  }
}

function cancelTask(project) {
  const inbox = document.getElementsByClassName("main")[0];
  const container = document.querySelector(".addTask");
  inbox.replaceChild(createTaskBtn(project), container);
}

function loadInbox(project) {
  const body = document.getElementsByClassName("body")[0];
  const main = document.getElementsByClassName("main")[0];

  if (main) {
    body.replaceChild(createInbox(project), main);
  } else body.appendChild(createInbox(project));

  loopTasks(tasks, project);
}

function searchForTask() {
  const taskbar = document.querySelector(".taskbar");
  const search = document.querySelector(".searchForTask");
  let taskNodeList = taskbar.childNodes;
  [...taskNodeList].forEach(element => {
    element.style.display = "flex";
  });
  let taskArray = [...taskNodeList].filter(task => !(task.querySelector(".bar-left p").textContent.toLowerCase()+task.querySelector(".bar-right p").textContent.toLowerCase()).includes(search.value));
  taskArray.forEach(task => task.style.display = "none");
}

export default loadInbox;
