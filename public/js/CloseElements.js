const closeElements = () => {
  let lastOpenElement = Array.from(document.querySelectorAll(".open")).pop();
  let lastOverlay = Array.from(document.querySelectorAll(".overlay")).pop();
  lastOverlay.remove();
  lastOpenElement.classList.remove("open");
  // setTimeout(() => {
  //   lastOpenElement.remove()
  // }, 600);
};
export default closeElements;
