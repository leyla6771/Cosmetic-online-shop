import getProductsData from "./Products.js";
import getSliderData from "./Slider.js";
import getCartsData from "./Carts.js";
import getBrandData from "./Brands.js";
import OpenSearchBox from "./OpenSearchBox.js";
import openHamber from "./HamberList.js";
import getCartsHeader from "./CartsHeader.js";
import getUnderHeaderData from "./UnderHeader.js";
import getBrandDiscriptionData from "./BrandDiscription.js";
import getBrandAdvertisementData from "./BrandAdvertisement.js";
import getFooterAdvData from "./FooterAdv.js";
import getFooterDetails from "./FooterDetails.js";
import openShoppingCart from "./ShoppingCart.js";
import openLogin from "./Login.js";
openLogin();
openShoppingCart();
getFooterDetails();
getFooterAdvData();
getBrandAdvertisementData();
getBrandDiscriptionData();
getUnderHeaderData();
getCartsHeader();
getSliderData();
getProductsData();
getCartsData();
getBrandData();
OpenSearchBox();
openHamber();

let backToUp = document.querySelector(".goUp");
let underHeader = document.querySelector("#underHeader");
let firstScroll = 0;
window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;
  if (window.scrollY > 300) {
    backToUp.classList.add("active");
  } else {
    backToUp.classList.remove("active");
  }
  if (firstScroll < currentScroll) {
    underHeader.classList.add("hide");
  } else {
    underHeader.classList.remove("hide");
  }
  firstScroll = currentScroll;
});
backToUp.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
$(document).ready(function() {
    $(".listCartBasket").niceScroll({
      railalign:"left",
      scrollspeed :"10",
      cursorcolor  : "#ccc",
      cursorwidth  :"6px"
     });
});

