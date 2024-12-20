// DOM Elements
const modalbg = document.querySelector(".bground");
const modalContent = document.querySelector(".content");
const modalFormBody = document.querySelector(".modal-body");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const form = document.forms["reserve"];
const confirmationModal = document.querySelector(".sendConfirmation");
const confirmationTitle = document.querySelector(".confirmation-title");
const closeConfirmationBtn = document.querySelector(".btn-close");

// launch and close modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalBtn.addEventListener("click", closeModal);

// Event Validation form
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validate()) {
        displayConfirmation();
    }
});

closeConfirmationBtn.addEventListener("click", closeConfirmation);

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
    modalFormBody.style.display = "block";
    confirmationModal.style.display = "none";
    clearAllErrors();
}

// close modal form
function closeModal() {
    modalbg.style.display = "none";
    clearAllErrors();
}

// function to validate sending conditions
function validate() {
    let isValid = true;
    const nameRegex = /[^A-Za-z\s]/;

    const firstName = form["first"];
    if (firstName.value.trim().length < 2 || nameRegex.test(firstName.value.trim())) {
        displayError(
            firstName,
            "Le prénom doit contenir au moins 2 lettres et uniquement des lettres."
        );
        isValid = false;
    } else {
        clearError(firstName);
    }

    const lastName = form["last"];
    if (lastName.value.trim().length < 2 || nameRegex.test(lastName.value.trim())) {
        displayError(lastName, "Le nom doit contenir au moins 2 caractères et uniquement des lettres.");
        isValid = false;
    } else {
        clearError(lastName);
    }

    const email = form["email"];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        displayError(email, "Veuillez entrer une adresse e-mail valide.");
        isValid = false;
    } else {
        clearError(email);
    }

    const birthdate = form["birthdate"];
    if (!birthdate.value) {
        displayError(birthdate, "Veuillez entrer votre date de naissance.");
        isValid = false;
    } else {
        clearError(birthdate);
    }

    const quantity = form["quantity"];
    if (quantity.value === "" || isNaN(quantity.value) || quantity.value < 0) {
        displayError(
            quantity,
            "Veuillez entrer un nombre valide pour les participations."
        );
        isValid = false;
    } else {
        clearError(quantity);
    }

    const location = form.querySelector('input[name="location"]:checked');
    if (!location) {
        displayError(form["location1"], "Veuillez sélectionner un tournoi.");
        isValid = false;
    } else {
        clearError(form["location1"]);
    }

    const termsAccepted = form["checkbox1"];
    if (!termsAccepted.checked) {
        displayError(
            termsAccepted,
            "Vous devez accepter les conditions d'utilisation."
        );
        isValid = false;
    } else {
        clearError(termsAccepted);
    }

    return isValid;
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

function clearAllErrors() {
    formData.forEach((field) => {
        field.removeAttribute("data-error");
        field.removeAttribute("data-error-visible");
    });
    form.reset();
}

function displayConfirmation() {
    modalFormBody.style.display = "none";
    confirmationModal.style.display = "block";
}

function closeConfirmation() {
    modalbg.style.display = "none";
}

// manage navbar display
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
