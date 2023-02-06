import loadInbox from "./inbox.js";

const projectsList = JSON.parse(localStorage.getItem("projectsList")) || [];

function addProject() {
  const projects = document.getElementsByClassName("projects")[0];
  const addProjects = document.getElementsByClassName("addProjects")[0];
  const container = document.createElement("div");
  container.classList.add("projectInput");
  const input = document.createElement("input");
  input.id = "projectName";
  const add = document.createElement("input");
  const cancel = document.createElement("input");

  input.classList.add("remove-from-change-colour");
  add.classList.add("remove-from-change-colour");
  cancel.classList.add("remove-from-change-colour");

  input.setAttribute("type", "input");
  add.setAttribute("type", "button");
  cancel.setAttribute("type", "button");

  input.setAttribute("placeholder", "e.g. School");
  add.setAttribute("value", "Add");
  cancel.setAttribute("value", "Cancel");

  input.setAttribute("maxlength", 8);

  add.addEventListener("click", getProject, false);
  cancel.addEventListener("click", cancelProject, false);

  container.appendChild(input);
  container.appendChild(add);
  container.appendChild(cancel);

  projects.replaceChild(container, addProjects);
}

function getProject() {
  const projects = document.getElementsByClassName("projects")[0];
  const projectInput = document.getElementsByClassName("projectInput")[0];
  const newProject = document.createElement("div");
  const projectName = document.getElementById("projectName").value;
  const className = projectName.replace(/\s+/g, "").toLowerCase();
  const removeProject = removeProjectBtn();

  projectsList.push(projectName);
  localStorage.setItem("projectsList", JSON.stringify(projectsList));

  if (projectName) {
    newProject.classList.add(className, "to-highlight", "project");
    newProject.textContent = `- ${projectName}`;
    newProject.addEventListener("click", changeColour, false);
    newProject.addEventListener(
      "click",
      function () {
        loadInbox(projectName);
      },
      false
    );
    removeProject.classList.add(className);

    newProject.appendChild(removeProject);
    projects.insertBefore(newProject, projectInput);
    cancelProject();
  }
}

function cancelProject() {
  const projects = document.getElementsByClassName("projects")[0];
  const container = document.getElementsByClassName("projectInput")[0];

  projects.replaceChild(createProjectBtn(), container);
}

function createProjectBtn() {
  const addProjectBtn = document.createElement("input");
  addProjectBtn.classList.add("addProjects", "to-highlight");

  addProjectBtn.setAttribute("type", "button");
  addProjectBtn.setAttribute("value", "+ Add Project");
  addProjectBtn.addEventListener("click", addProject, false);

  return addProjectBtn;
}

function changeColour(e) {
  const buttons = document.querySelectorAll(".to-highlight");
  for (const button of buttons) button.style.background = "#bbbbbb";
  e.target.style.background = "#aaaaaa";
}

function loadProjects() {
  const projects = document.getElementsByClassName("projects")[0];
  const addProjects = document.getElementsByClassName("addProjects")[0];

  for (const project of projectsList) {
    const className = project.replace(/\s+/g, "").toLowerCase();
    const newProject = document.createElement("div");
    const removeProject = removeProjectBtn();

    newProject.classList.add(className, "to-highlight", "project");
    newProject.textContent = `- ${project}`;
    newProject.addEventListener("click", changeColour, false);
    newProject.addEventListener(
      "click",
      function () {
        loadInbox(project);
      },
      false
    );
    removeProject.classList.add(className);

    newProject.appendChild(removeProject);
    projects.insertBefore(newProject, addProjects);
  }
}

function removeProjectBtn() {
  const button = document.createElement("input");
  button.classList.add("remove-project");

  button.setAttribute("type", "button");
  button.setAttribute("value", "X");
  button.addEventListener("click", removeProject, false);

  return button;
}

function removeProject(e) {
  const projects = document.getElementsByClassName("projects")[0];
  const projectToRemoveID = e.target.classList[1];
  const projectToRemove = document.getElementsByClassName(projectToRemoveID)[0];
  console.log(projectToRemove);

  projects.removeChild(projectToRemove);

  for (let i = 0; i < projectsList.length; i++) {
    const projectItem = projectsList[i].replace(/\s+/g, "").toLowerCase();
    if (projectItem === projectToRemoveID) {
      projectsList.splice(i, 1);
      localStorage.setItem("projectsList", JSON.stringify(projectsList));
      break;
    }
  }
}

export { createProjectBtn, loadProjects };
