import overlay from "./Overlay.js";

const openSearchBox=()=>{
    let searchIcon = document.querySelector("#searchIcon");
    searchIcon.addEventListener("click", () => {
      let searchbox = document.createElement("form");
      searchbox.className = "searchBoxMobile";
      searchbox.innerHTML = `  <svg
                  class="w-7 h-5 text-gray-500 my-auto "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                  <input
                  class=" searchBoxInput w-full focus:outline-none"
                  type="search"
                  placeholder="محصول مورد نظرتان را جستجو کنید"
                  required
                />`;
    
     
      document.body.appendChild(searchbox);
      overlay();
      setTimeout(()=>{
        searchbox.classList.add("open");
      },60)
    });
  }
  export default openSearchBox