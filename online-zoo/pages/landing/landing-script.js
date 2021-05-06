//modals
const feedbackBtn = document.getElementById("feedback-btn");

feedbackBtn.addEventListener("click", () => openModal("feedback"));


//slider
const carousel = document.getElementById("how-works-carousel");
const carouselCards = document.querySelectorAll(".how-works__card");
const elems = Array.from(carouselCards);

function activeCarousel(event) {
  const newActiveCard = event.target.parentNode;
  const isCard = newActiveCard.closest(".carousel__item");

  if (!isCard || newActiveCard.dataset.pos === "0") console.log("elem");

  updatePos(newActiveCard);
}

function updatePos(elem) {
  console.log(elem)
  const curPos = elem.dataset.pos;

  const active = elems.find((item => item.dataset.pos === "0"));
  const prev = elems.find((item => item.dataset.pos === "-1"));
  const next = elems.find((item => item.dataset.pos === "1"));
  const first = elems.find((item => item.dataset.pos === "-2"));
  const last = elems.find((item => item.dataset.pos === "2"));

  [active, prev, next, first, last].forEach(item => {
    const itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, curPos)
  });

  function getPos(current, active) {
    let diff = current - active;

    if (Math.abs(diff) > 2) {
      switch (diff) {
        case -4:
          diff = 1;
          console.log("new", diff)
          break;

        case -3:
          diff = 2;
          break;

        case 4:
          diff = -1;
          break;

        case 3:
          diff = -2;
          break;
      }
    }

    return diff;
  }
}

carousel.addEventListener("click", (event) => activeCarousel(event));

//slider pets-in-zoo
const prevArrow = document.querySelector(".slider__arrow--prev");
const nextArrow = document.querySelector(".slider__arrow--next");
const vieport = document.querySelector(".slider__vieport");
const vieportWidth = vieport.offsetWidth;

const scrollLeft = (event) => {
  vieport.scrollBy((-vieportWidth), 0)

};

const scrollRight = (event) => {
  vieport.scrollBy(vieportWidth, 0)
};

prevArrow.addEventListener("click", (event) => scrollLeft(event));
nextArrow.addEventListener("click", (event) => scrollRight(event));
