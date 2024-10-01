import closeElements from "./CloseElements.js";
const overlay = () => {
  let Overlay = document.createElement("div");
  Overlay.classList.add("overlay");
  document.body.append(Overlay);
  Overlay.addEventListener("click", function () {
    closeElements();
  });
};
export default overlay;
