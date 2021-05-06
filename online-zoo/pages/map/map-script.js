const mapImage = document.getElementById("map");
const mapWrapper = document.getElementById("map-wrapper");
const dndViewport = document.getElementById("dnd-viewport");
const translateWpapper = document.getElementById("translate");

//MAP SCALE

document.body.style.setProperty("--scale", 1);
const scaleMinus = document.querySelector(".map__minus");
const scalePlus = document.querySelector(".map__plus");
const stepScale = 0.2;
let scale = 1;
let step = 0

const decreaseScale = () => {
  if (scale <= 1) return;

  scale -= stepScale;

  document.body.style.setProperty("--scale", scale);
}

const increaseScale = () => {
  if (scale >= 1.6) return;

  scale += stepScale;

  document.body.style.setProperty("--scale", scale);
}

scaleMinus.addEventListener("click", decreaseScale);
scalePlus.addEventListener("click", increaseScale);

//---------

//DnD MAP
let translateX = 0;
let translateY = 0;

translateWpapper.style.setProperty("transform", `translate(${translateX}px, ${translateY}px)`);

const drag = (event) => {

  translateX += event.movementX;
  translateY += event.movementY;

  translateWpapper.style.setProperty("transform", `translate(${translateX}px, ${translateY}px)`);
}

const leaveDrag = (event) => {
  stopDrag();
}

const startDrag = (event) => {
  dndViewport.addEventListener("mousemove", drag);
  dndViewport.addEventListener("mouseleave", leaveDrag);
}

const stopDrag = (event) => {
  dndViewport.removeEventListener("mousemove", drag);
  dndViewport.removeEventListener("mouseleave", leaveDrag);
}

dndViewport.ondragstart = () => false;

dndViewport.addEventListener("mousedown", startDrag);
dndViewport.addEventListener("mouseup", stopDrag);

//---------
