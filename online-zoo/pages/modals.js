"use srtict";

const body = document.querySelector(".body");
const modals = document.querySelector(".js-modals");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const textField = document.getElementById("text-feedback");
const sendBtn = document.getElementById("send");
const feedbackLink = document.getElementById("nav-feedback");
let closeHandler;

function openModal(name) {
  const modal = modals.querySelector(`[data-modal-name="${name}"]`);
  console.log(modal);

  if (!modal) return;

  const modalsClose = document.querySelector(".js-close");
  const closeModal = () => {
    modals.classList.remove("modals--active");
    modal.classList.remove("modals__container--active");
    body.classList.remove("no-scrollable");
    modalsClose.removeEventListener("click", closeModal);
  };
  closeHandler = closeModal;

  modalsClose.addEventListener("click", closeModal);

  modals.classList.add("modals--active");
  modal.classList.add("modals__container--active");
  body.classList.add("no-scrollable");
}

function closeModal(event) {
  closeHandler();
  closeHandler = null;
}

function validateFields() {
  if (
    nameField.validity.valid &&
    emailField.validity.valid &&
    textField.validity.valid
  ) {
    sendBtn.classList.remove("btn--invalid")
  } else {
    sendBtn.classList.add("btn--invalid")
  }
}

modals.addEventListener("click", (event) => {
  if (event.target === modals) {
    closeModal();
  }
});

nameField.addEventListener("input", validateFields);
emailField.addEventListener("input", validateFields);
textField.addEventListener("input", validateFields);

feedbackLink.addEventListener("click", () => openModal("feedback"));
