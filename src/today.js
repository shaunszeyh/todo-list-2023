import { tasks, loopTasks } from "./task";

function createToday() {
  const today = document.createElement("div");
  const title = document.createElement("h2");
  const taskbar = document.createElement("div");

  today.classList.add("today", "main");
  taskbar.classList.add("taskbar");
  title.textContent = "Today";
  today.appendChild(title);
  today.appendChild(taskbar);

  return today;
}

function loadToday() {
  const body = document.getElementsByClassName("body")[0];
  const main = document.getElementsByClassName("main")[0];

  if (main) {
    body.replaceChild(createToday(), main);
  } else body.appendChild(createToday());

  const newTasks = tasks.filter(filterToday);
  loopTasks(newTasks, "");
}

function filterToday(task) {
  const today = new Date();
  const date = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;
  return date == task.dueDate;
}

export default loadToday;
