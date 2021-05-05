const mapImage = document.getElementById("map");
const mapWrapper = document.getElementById("map-wrapper");

//MAP SCALE
const scaleMinus = document.querySelector(".map__minus");
const scalePlus = document.querySelector(".map__plus");
const stepScale = 0.15;
let scale = 1;

const decreaseScale = () => {
  if (scale <= 0.4) return;

  scale -= stepScale;
  mapImage.style.transform = `scale(${scale})`;
}

const increaseScale = () => {
  if (scale >= 1.6) return;

  scale += stepScale;
  mapImage.style.transform = `scale(${scale})`;
}

scaleMinus.addEventListener("click", decreaseScale);
scalePlus.addEventListener("click", increaseScale);

//---------
