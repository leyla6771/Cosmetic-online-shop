import getUnderHeaderArayeshiDropDown from "./UnderHeaderArayeshiDropDown.js";
import getUnderHeaderPostDropDown from "./UnderHeaderPostDropDown.js";
import getUnderHeaderMooDropDown from "./UnderHeaderMooDropDown.js";
const getUnderHeaderData = async () => {
  let htmlUnderHeader = "";
  try {
    let res = await axios.get("http://localhost:3004/underHeaderData");
    res.data.map((elem) => {
      htmlUnderHeader += `
        <li class="underHeaderDataName" id="underHeaderDataName">
          <span class="underHeaderDataLink" id="underHeaderDataLink">
            ${elem.dataName}</span>
        </li>
               `;
    });
    document.querySelector("#underHeaderContainer").innerHTML = htmlUnderHeader;
  } catch (error) {
    console.log(error);
  }
  let underHeaderDataName = Array.from(
    document.querySelectorAll("#underHeaderDataName")
  );
  //   let link = document.querySelector(".underHeaderDataName");
  // console.log(link);

  let dropDown = document.querySelector("#dropDown");
  dropDown.classList.add("hidden");
  underHeaderDataName.map((elem) => {
    elem.addEventListener("mouseenter", (e) => {
      if (e.target.innerText == "آرایشی") {
        dropDown.classList.remove("hidden");
        getUnderHeaderArayeshiDropDown();
      } else if (e.target.innerText == "پوست") {
        dropDown.classList.remove("hidden");
        getUnderHeaderPostDropDown();
      } else if (e.target.innerText == "مو") {
        dropDown.classList.remove("hidden");
        getUnderHeaderMooDropDown();
      }
      elem.classList.add("activeNav");

      elem.addEventListener("mouseleave", (e) => {
        // console.log(e);
        if (e.offsetX < 0) {
          elem.classList.remove("activeNav");
        }
      });
      dropDown.addEventListener("mouseleave", function () {
        dropDown.classList.add("hidden");
        elem.classList.remove("activeNav");
      });
      const underHeaderLeave = () => {
        let header = document.querySelector("#header");
        let body = document.querySelector("main") 
        header.addEventListener("mouseenter", function () {
          dropDown.classList.add("hidden");
          elem.classList.remove("activeNav");
        });
        body.addEventListener("mouseenter",()=>{
        elem.classList.remove("activeNav");
        })
      };
      underHeaderLeave();
    });
  });
};
export default getUnderHeaderData;
