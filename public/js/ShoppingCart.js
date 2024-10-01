import overlay from "./Overlay.js";
const openShoppingCart = () => {
  let shoppingCartIcon = document.querySelector("#shoppingCartIcon");
  shoppingCartIcon.addEventListener("click", () => {
    let shoppingBasket = document.querySelector(".shoppingBasket");
    overlay();
    setTimeout(() => {
      shoppingBasket.classList.add("open");
    }, 60);
  });
};

export default openShoppingCart;
