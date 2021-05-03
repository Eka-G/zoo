const feedbackBtn = document.getElementById("feedback-btn");
const feedbackLink = document.getElementById("nav-feedback");
const donateBtn = document.getElementById("donate-btn");
const donateTabletBtn = document.getElementById("donate-tablet-btn");
const nextDonateBtn = document.getElementById("next-donate");

feedbackBtn.addEventListener("click", () => openModal("feedback"));
feedbackLink.addEventListener("click", () => openModal("feedback"));
donateBtn.addEventListener("click", () => openModal("donate"));
donateTabletBtn.addEventListener("click", () => openModal("donate"));
nextDonateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  openModal("pay")
});
