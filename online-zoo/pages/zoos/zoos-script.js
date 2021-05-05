//accordion
const informationBox = document.querySelector(".information");
console.log(informationBox)

function toggleAccordion(event) {
  if (event.target.classList.contains("information__title")) {
    event.target.nextSibling.nextSibling.classList.toggle("information__text-accordion--active");
    event.target.nextSibling.nextSibling.nextSibling.nextSibling.classList.toggle("information__arrow-wrapper--open");
    event.target.parentNode.parentNode.classList.toggle("information__block--active");
  } else if (event.target.classList.contains("information__arrow")) {
    event.target.parentNode.classList.toggle("information__arrow-wrapper--open");
    event.target.parentNode.previousSibling.previousSibling.classList.toggle("information__text-accordion--active");
    event.target.parentNode.parentNode.parentNode.classList.toggle("information__block--active")
  }
}


informationBox.addEventListener("click", (event) => toggleAccordion(event));




// information__arrow--open
// information__text - accordion--active
