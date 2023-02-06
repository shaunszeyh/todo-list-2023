import loadInbox from "./inbox";
import loadToday from "./today";
import loadUpcoming from "./upcoming";
import { createProjectBtn, loadProjects } from "./project";

function createHeader() {
  const header = document.createElement("div");
  const title = document.createElement("h1");

  header.classList.add("header");
  title.textContent = "To-do List";
  header.appendChild(title);

  return header;
}

function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "Made by Shaun Sze © 2021";

  return footer;
}

function createSidebar() {
  const sidebar = document.createElement("div");
  const inbox = document.createElement("input");
  const today = document.createElement("input");
  const upcoming = document.createElement("input");
  const projectsTitle = document.createElement("h2");
  const projects = document.createElement("div");

  sidebar.classList.add("sidebar");
  projects.classList.add("projects");

  inbox.classList.add("to-highlight");
  today.classList.add("to-highlight");
  upcoming.classList.add("to-highlight");

  inbox.setAttribute("type", "button");
  today.setAttribute("type", "button");
  upcoming.setAttribute("type", "button");

  inbox.setAttribute("value", "- Inbox");
  today.setAttribute("value", "- Today");
  upcoming.setAttribute("value", "- This Week");

  inbox.style.background = "#aaaaaa";
  projectsTitle.textContent = "Projects";

  inbox.addEventListener(
    "click",
    function () {
      loadInbox("Inbox");
    },
    false
  );
  today.addEventListener("click", loadToday, false);
  upcoming.addEventListener("click", loadUpcoming, false);

  inbox.addEventListener("click", changeColour, false);
  upcoming.addEventListener("click", changeColour, false);
  today.addEventListener("click", changeColour, false);

  projects.appendChild(projectsTitle);
  projects.appendChild(createProjectBtn());
  sidebar.appendChild(inbox);
  sidebar.appendChild(today);
  sidebar.appendChild(upcoming);
  sidebar.appendChild(projects);

  return sidebar;
}

function changeColour(e) {
  const buttons = document.querySelectorAll(".to-highlight");
  for (const button of buttons) button.style.background = "#bbbbbb";
  e.target.style.background = "#aaaaaa";
}

function initializePage() {
  const content = document.getElementById("content");
  const body = document.getElementsByClassName("body")[0];

  content.insertBefore(createHeader(), body);
  body.appendChild(createSidebar());
  content.appendChild(createFooter());
  loadInbox("Inbox");
  loadProjects();
}

export default initializePage;
