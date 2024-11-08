
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.querySelector('.close')
const formData = document.querySelectorAll(".formData");
const form = document.forms['reserve'];

// launch and close modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalBtn.addEventListener('click', closeModal);

// Event Validation form
form.addEventListener("submit", function(e) {
  if (!validate()) {
    e.preventDefault();
  }
});

// launch and close modal form
function launchModal() {
  modalbg.style.display = "block";
}
function closeModal() {
  modalbg.style.display = "none"
}

function validate() {
  let isValid = true;

  const firstName = form["first"];
  if (firstName.value.trim().length < 2) {
    isValid = false;
  }

  return isValid
}

function displayError(element, message) {
  const parent = element.closest(".formData");
  parent.setAttribute("data-error", message);
  parent.setAttribute("data-error-visible", "true");
}

function clearError(element) {
  const parent = element.closest(".formData");
  parent.removeAttribute("data-error");
  parent.removeAttribute("data-error-visible");
}

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


