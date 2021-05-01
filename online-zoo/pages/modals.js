"use srtict";

const modals = document.querySelector(".js-modals");
let closeHandler;

function openModal(name) {
  const modal = modals.querySelector(`[data-modal-name="${name}"]`);

  if (!modal) return;

  const modalsClose = document.querySelector(".js-close");
  const closeModal = () => {
    modals.classList.remove("modals--active");
    modal.classList.remove("modals__container--active");
    modalsClose.removeEventListener("click", closeModal);
  };
  closeHandler = closeModal;

  modalsClose.addEventListener("click", closeModal);

  modals.classList.add("modals--active");
  modal.classList.add("modals__container--active");
}

function closeModal(event) {
  closeHandler();
  closeHandler = null;
}

modals.addEventListener("click", (event) => {
  if (event.target === modals) {
    closeModal();
  }
});
