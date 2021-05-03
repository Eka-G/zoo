"use srtict";

const body = document.querySelector(".body");
const modals = document.querySelector(".js-modals");
const payModal = document.getElementById("pay-modal");
const card = document.getElementById("card");
console.log(111)
let closeHandler = () => { };

function openModal(name) {
  closeModal();
  const modal = modals.querySelector(`[data-modal-name="${name}"]`);

  if (!modal) return;

  const modalsClose = modal.querySelector(".js-close");
  const closeFn = () => {
    modals.classList.remove("modals--active");
    modal.classList.remove("modals__container--active");
    body.classList.remove("no-scrollable");
    modalsClose.removeEventListener("click", closeFn);
  };
  closeHandler = closeFn;

  modalsClose.addEventListener("click", closeFn);

  modals.classList.add("modals--active");
  modal.classList.add("modals__container--active");
  body.classList.add("no-scrollable");
}

function closeModal() {
  closeHandler();
  closeHandler = () => { };
}

modals.addEventListener("click", (event) => {
  if (event.target === modals) {
    closeModal();
  }
});

function sliceValue(data, num) {
  return data.slice(0, num);
}

function completeValue(data, num) {
  return "0".repeat(num - data.length) + data;
}

payModal.addEventListener("input", (event) => {
  if (event.target.type > "number") {
    const leng = event.target.dataset.limit;

    if (event.target.value.length !== leng) {
      event.target.value = sliceValue(event.target.value, leng);
    }
  }
});

payModal.addEventListener("change", (event) => {
  const leng = event.target.dataset.limit;

  if (event.target.value.length < leng) {
    event.target.value = completeValue(event.target.value, leng);
  }
});
