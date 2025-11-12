// Appearing and Resizing Slidebar
const drawerCheckbox = document.getElementById("my-drawer");
const mainContent = document.getElementById("main-content");

function isMdOrAbove() {
  return window.innerWidth >= 768; // Tailwind md breakpoint
}

drawerCheckbox.addEventListener("change", () => {
  if (drawerCheckbox.checked && isMdOrAbove()) {
    mainContent.classList.add("ml-64"); // moves content right
  } else {
    mainContent.classList.remove("ml-64");
  }
});

// Update on window resize
window.addEventListener("resize", () => {
  if (!drawerCheckbox.checked) {
    mainContent.classList.remove("ml-64");
  } else if (drawerCheckbox.checked && isMdOrAbove()) {
    mainContent.classList.add("ml-64");
  } else {
    mainContent.classList.remove("ml-64");
  }
});
// Changing With student name from local storage
const greetingName = document.getElementById("greeting-name");

if (greetingName) {
  const studentName = localStorage.getItem("studentName");
  greetingName.innerHTML = studentName ? studentName : "Student";
}
