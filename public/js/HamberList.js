import overlay from "./Overlay.js"
const openHamber=()=>{
    let hamber=document.querySelector("#hamber")
    hamber.addEventListener("click",()=>{
        let hamberList=document.createElement("div")
        hamberList.className = "hamberMobile";
        hamberList.innerHTML=`
         <div class="mobileMenu w-full ">
        <div id="logo ">
          <a href="#">
            <img class="w-1/2 mx-3.5 "  src="./images/logo.png" alt="" />
          </a>
        </div>
        <div class="category cursor-pointer">
          <div class="select-btn flex px-4 justify-between items-center py-2 active:text-pink-400" id="select-btn">
            <span id="item">آرایشی</span>
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4" id="dropIcon">
              <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
            </svg>
            </div>
            <ul class="list px-8 py-2 relative ">
              <li class="option py-2">
                 <span class="option-text">آرایش صورت
                 </span>
                </li>
                <li class="option py-2">
                  <span class="option-text">آرایش ناخن
                  </span>
                 </li>
                 <li class="option py-2">
                  <span class="option-text">آرایش چشم و ابرو  
                  </span>
                 </li>
                 <li class="option py-2">
                  <span class="option-text">آرایش لب 
                  </span>
                 </li>
              </ul> 
          <div class="select-btn flex px-4 justify-between items-center py-2 " id="select-btn">
            <span id="item">پوست</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
              <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
            </svg>           
          </div>
          <div class="select-btn flex px-4 justify-between items-center py-2 " id="select-btn">
            <span id="item">مو</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
              <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="select-btn flex px-4 justify-between items-center py-2 " id="select-btn">
            <span id="item">بدن و بهداشت شخصی</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
              <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="select-btn flex px-4 justify-between items-center py-2  " id="select-btn">
            <span id="item">مردانه</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
              <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="select-btn flex px-4 justify-between items-center py-2" id="select-btn">
            <span id="item">مادر و کودک</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
              <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="select-btn flex px-4 justify-between items-center py-2" id="select-btn">
            <span id="item">عطر و ادکلن</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
              <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="select-btn flex px-4 justify-between items-center py-2" id="select-btn">
            <span id="item">لوازم شخصی برقی</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
              <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
       
      </div>`
      document.body.appendChild(hamberList);
      overlay();
      setTimeout(()=>{
        hamberList.classList.add("open");
      },60)
    })
}



   
export default openHamber