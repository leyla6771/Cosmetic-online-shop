let list = document.querySelector(".list");
let items = document.querySelectorAll(".sliderItem");
let dots = document.querySelectorAll(".dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let active = 0;
const getSliderData = async () => {
  let htmlSlider = "";
  let htmlButtons = "";
  let htmlDots = "";
  try {
    let res = await axios.get("http://localhost:3004/sliderImages");
    res.data.map((elem) => {
      htmlSlider += `
        <div class="sliderItem" id="sliderItem">
            <img class="sliderImage" src="${elem.imageUrl}" alt="" /> 
            <span class="sliderHeader">${elem.sliderHeader}</span>
          </div>  
          
           `;
      htmlButtons = `
      <button id="prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <button id="next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          `;
      htmlDots += `  
          <li class="active"></li>
        `;
    });
    document.querySelector("#sliderImagesList").innerHTML = htmlSlider;
    document.querySelector("#sliderButton").innerHTML = htmlButtons;
    document.querySelector("#dots").innerHTML = htmlDots;
  } catch (error) {
    console.log(error);
  }
  let items = document.querySelectorAll("#sliderItem");
  let dots = document.querySelectorAll(".dots li");
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");

  let lengthItems = items.length - 1;
  next.addEventListener("click", () => {
    if (active + 1 > lengthItems) {
      active = 0;
    } else {
      active = active + 1;
    }
    reloadSlider(items, dots, prev, next);
  });
  prev.addEventListener("click", () => {
    if (active - 1 < 0) {
      active = lengthItems;
    } else {
      active = active - 1;
    }
    reloadSlider(items, dots, prev, next);
  });
};

let refreshSlider = setInterval(() => {
  let next = document.getElementById("next");
  next.click();
}, 5000);

function reloadSlider(items, dots, prev, next) {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + "px";
  let lastActiveDots = document.querySelector(".dots li.active");
  lastActiveDots.classList.remove("active");
  dots[active].classList.add("active");
  clearInterval(refreshSlider);
  refreshSlider = setInterval(() => {
    let next = document.getElementById("next");
    next.click();
  }, 5000);
}
dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider(items, dots, prev, next);
  });
});
export default getSliderData;
