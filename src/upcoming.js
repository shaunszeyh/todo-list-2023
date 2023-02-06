import { tasks, loopTasks } from "./task";
import { isSameWeek } from "date-fns";

function createUpcoming() {
  const upcoming = document.createElement("div");
  const title = document.createElement("h2");
  const taskbar = document.createElement("div");

  upcoming.classList.add("upcoming", "main");
  taskbar.classList.add("taskbar");
  title.textContent = "This Week";
  upcoming.appendChild(title);
  upcoming.appendChild(taskbar);

  return upcoming;
}

function loadUpcoming() {
  const body = document.getElementsByClassName("body")[0];
  const main = document.getElementsByClassName("main")[0];

  if (main) {
    body.replaceChild(createUpcoming(), main);
  } else body.appendChild(createUpcoming());

  const newTasks = tasks.filter(filterUpcoming);
  loopTasks(newTasks, "");
}

function filterUpcoming(task) {
  const today = new Date();
  const date = task.dueDate.split("/")[0];
  const month = task.dueDate.split("/")[1];
  const year = task.dueDate.split("/")[2];

  return isSameWeek(today, new Date(year, month - 1, date));
}

export default loadUpcoming;
