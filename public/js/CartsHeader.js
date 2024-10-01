const getCartsHeader = async () => {
    let htmlCartsHeader = "";
    try {
      let res = await axios.get("http://localhost:3004/cartsHeader");
      res.data.map((elem) => {
        htmlCartsHeader += `
               <span class="cartsHeaderBtn" id="cartsHeaderBtn">${elem.cartsHeaderTitle}</span>
             `;
      });
      document.querySelector("#cartsHeaderButtons").innerHTML = htmlCartsHeader;
    } catch (error) {
      console.log(error);
    }
let cartsHeaderBtn = Array.from(document.querySelectorAll("#cartsHeaderBtn"));

let cartsContainer = document.querySelector("#cartsContainer");

cartsHeaderBtn.map((elem)=>{
    elem.addEventListener("click", function (e) {
      console.log(e);
      if(e.target.innerHTML=="درمان آکنه"){

      }
        // cartsContainer.classList.add("hidden");
      });
})
  };
  export default getCartsHeader;