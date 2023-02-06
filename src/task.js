const tasks = JSON.parse(localStorage.getItem("todoList")) || [];

function Task(name, dueDate, completed, id, project) {
  this.name = name;
  this.dueDate = dueDate;
  this.completed = completed;
  this.id = id;
  this.project = project;
}

function myTask(task) {
  tasks.push(task);
  localStorage.setItem("todoList", JSON.stringify(tasks));
}

function loopTasks(tasks, project) {
  const taskbar = document.getElementsByClassName("taskbar")[0];
  taskbar.innerHTML = "";

  for (const task of tasks) {
    if (task.project == project || project.length == 0 || project == "Inbox") {
      const bar = document.createElement("div");
      bar.classList.add("bar");
      const barLeft = document.createElement("div");
      barLeft.classList.add("bar-left");
      const barRight = document.createElement("div");
      barRight.classList.add("bar-right");
      const className = (task.name + task.dueDate)
        .replace(/\s+/g, "")
        .toLowerCase();
      bar.classList.add(className);
      const completed = document.createElement("input");
      const name = document.createElement("p");
      const date = document.createElement("p");

      completed.setAttribute("type", "image");
      completed.setAttribute("src", "images/checkbox.png");
      completed.setAttribute("width", "20px");
      completed.setAttribute("height", "20px");
      completed.classList.add(className);
      completed.addEventListener("click", removeTask, false);

      if (project == "Inbox" || project.length == 0) {
        name.textContent = `${task.name} (${task.project})`;
      } else name.textContent = task.name;
      date.textContent = task.dueDate;

      barLeft.appendChild(completed);
      barLeft.appendChild(name);
      barRight.appendChild(date);
      bar.appendChild(barLeft);
      bar.appendChild(barRight);
      taskbar.appendChild(bar);
    }
  }
}

function removeTask(e) {
  const taskbar = document.getElementsByClassName("taskbar")[0];
  const taskToRemoveID = e.target.classList[0];
  const taskToRemove = document.getElementsByClassName(taskToRemoveID)[0];

  taskbar.removeChild(taskToRemove);

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === taskToRemoveID) {
      tasks.splice(i, 1);
      localStorage.setItem("todoList", JSON.stringify(tasks));
      break;
    }
  }
}

export { tasks, Task, myTask, loopTasks, removeTask };
