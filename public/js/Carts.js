let listCartHtml = document.querySelector(".listCartBasket");
let iconCartSpan = document.querySelector(".iconCartSpan");
let finalDetailsPrice = document.querySelector(".finalDetailsPrice");
let finalDetails = document.querySelector(".finalDetails")
let productCount = document.querySelector(".productCount");
let emptyBasket = document.querySelector(".emptyBasket");
const getCartsData = async () => {
  let carts = [];
  let htmlCarts = "";
  try {
    let res = await axios.get("http://localhost:3004/carts");
    res.data.map((elem) => {
      htmlCarts += `
            <div class="cartItems swiper-slide" id="${elem.id}">
            <button class="fav"><i class="fa-solid fa-heart fa-2xl fa-beat-fade" style="--fa-beat-fade-opacity: 0.67; --fa-beat-fade-scale: 1.075;"></i></button>
                 <img class="cartImages" src=${elem.cartImage}  alt=""/>
                 <p class="cartDiscription">${elem.cartDiscription}</p>
                 <span class="cartPriceTag" >${elem.cartPriceTag} تومان</span>
                 <button class="addToBasket" id="addToBasket">   <svg
            class=" h-6 w-6 text-pink-400 hover:cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path
              d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
            />
          </svg>افزودن به سبد خرید </button>
                 </div>
             `;
    });
    document.querySelector("#cartList").innerHTML = htmlCarts;
  } catch (error) {
    console.log(error);
  }
  let addToBasket = Array.from(document.querySelectorAll("#addToBasket"));
  addToBasket.map((elem) => {
    elem.addEventListener("click", (e) => {
      let productId = e.target.parentElement.id;
      AddToCart(productId);
    });
  });
  const AddToCart = (productId) => {
    let positionThisProductInCart = carts.findIndex(
      (value) => value.productId == productId
    );

    if (carts.length <= 0) {
      carts = [
        {
          productId: productId,
          quantity: 1,
        },
      ];
    } else if (positionThisProductInCart < 0) {
      carts.push({
        productId: productId,
        quantity: 1,
      });
    } else {
      carts[positionThisProductInCart].quantity =
        carts[positionThisProductInCart].quantity + 1;
    }
    AddCartToHtml(carts);
  };
  const AddCartToHtml = (carts) => {
    let iconCartSpan = document.querySelector(".iconCartSpan");
    let cartList = Array.from(document.querySelectorAll(".cartItems"));
    let listCartHtml = document.querySelector(".listCartBasket");
    listCartHtml.innerHTML = "";
    let totalQuantity = 0;
    let totalPrice = 0;
    if (carts.length > 0) {
      carts.map((cart) => {
        totalQuantity = totalQuantity + cart.quantity;
        let newCart = document.createElement("div");
        newCart.classList.add("item");
        let positionProducts = cartList.findIndex(
          (value) => value.id == cart.productId
        );
        let images = cartList[positionProducts].childNodes[3].currentSrc;
        let disc = cartList[positionProducts].childNodes[5].innerHTML;
        let price = parseFloat(
          cartList[positionProducts].childNodes[7].innerHTML
        );
        let id = cartList[positionProducts].id;
        newCart.innerHTML = `
  <div class="BasketItem" id="${id}">
  <div class="BasketItemImage">
    <img src="${images}" alt="">
  </div>
  <div class="BasketItemDiscription">
    <div class="discription">${disc}</div>
    <div class="price">${price * cart.quantity} تومان</div>
   <div class="quantityContainer">
    <div class="quantity">
      <span class="plus">+</span>
      <span>${cart.quantity}</span>
      <span class="minus">-</span>
    </div>
   </div>
  </div>
  </div>`;
        listCartHtml.appendChild(newCart);
        totalPrice = totalPrice + price * cart.quantity;
      });
      iconCartSpan.innerHTML = totalQuantity;
      finalDetailsPrice.innerHTML = totalPrice + " " + "تومان";
      productCount.innerHTML = `${totalQuantity} محصول`;
   

    }
  
  };

  listCartHtml.addEventListener("click", (e) => {
    let positionClick = e.target;
    if (
      positionClick.classList.contains("minus") ||
      positionClick.classList.contains("plus")
    ) {
      let productId =
        positionClick.parentElement.parentElement.parentElement.parentElement
          .id;
      let type = "minus";
      if (positionClick.classList.contains("plus")) {
        type = "plus";
      }
      changeQuantity(productId, type);
    }
  });
  const changeQuantity = (productId, type) => {
    let listCartHtml = document.querySelector(".listCartBasket");

    let positionItemInCart = carts.findIndex(
      (value) => value.productId == productId
    );
    if (positionItemInCart >= 0) {
      switch (type) {
        case "plus":
          carts[positionItemInCart].quantity =
            carts[positionItemInCart].quantity + 1;
          break;
        default:
          let valueChange = carts[positionItemInCart].quantity - 1;
          if (valueChange > 0) {
            carts[positionItemInCart].quantity = valueChange;
          } else {
            carts.splice(positionItemInCart, 1);
            iconCartSpan.innerHTML = 0;
            listCartHtml.innerHTML = "سبد خرید شما خالی است";
            productCount.innerHTML = ` 0 محصول`;
           finalDetailsPrice.innerHTML="0 تومان"
          }

          break;
      }
    }

    AddCartToHtml(carts);
  };

  emptyBasket.addEventListener("click", () => {
    carts = [];
    listCartHtml.innerHTML = "سبد خرید شما خالی است";
    iconCartSpan.innerHTML = 0;
    productCount.innerHTML = ` 0 محصول`;
    finalDetailsPrice.innerHTML="0 تومان"

    
  });
};

export default getCartsData;
