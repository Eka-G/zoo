//accordion
const informationBox = document.querySelector(".information");

function toggleAccordion(event) {
  if (event.target.classList.contains("information__title")) {
    event.target
      .nextSibling
      .nextSibling
      .classList
      .toggle("information__text-accordion--active");
    event.target
      .nextSibling
      .nextSibling
      .nextSibling
      .nextSibling
      .classList
      .toggle("information__arrow-wrapper--open");
    event.target
      .parentNode
      .parentNode
      .classList
      .toggle("information__block--active");
  } else if (event.target.classList.contains("information__arrow")) {
    event.target
      .parentNode
      .classList
      .toggle("information__arrow-wrapper--open");
    event.target
      .parentNode
      .previousSibling
      .previousSibling
      .classList
      .toggle("information__text-accordion--active");
    event.target
      .parentNode
      .parentNode
      .parentNode
      .classList
      .toggle("information__block--active")
  }
}

informationBox.addEventListener("click", (event) => toggleAccordion(event));


//videoCarousel
const videoList = document.querySelector(".translation__list");
const mainVideo = document.querySelector(".translation__main-content");

function changeVideo(event) {
  const currentVideo = event.target.firstChild.nextSibling;
  let mainSrc = mainVideo.src;
  let currentSrc = currentVideo.src;

  mainVideo.src = currentSrc;
  currentVideo.src = mainSrc;
}

videoList.addEventListener("click", (event) => changeVideo(event));
