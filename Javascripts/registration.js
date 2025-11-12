const modal = document.getElementById("my_modal");
const registerBtn = document.getElementById("register");
const enterBtn = document.getElementById("enterSiteBtn");

// Open modal (after registration success)
registerBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const form = event.target.closest("form");

  if (form.checkValidity()) {
    modal.showModal();
  } else {
    form.reportValidity(); // highlight missing fields
  }
});

// Enter website (close or redirect)
enterBtn.addEventListener("click", () => {
  modal.close();
  // window.location.href = "/stLanding.html";
});

// Keeping name in local storage
const nameInput = document.getElementById("name");
if (nameInput) {
  // Save name as the user types
  nameInput.addEventListener("input", () => {
    localStorage.setItem("studentName", nameInput.value);
  });
}
