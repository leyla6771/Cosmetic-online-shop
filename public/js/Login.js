import overlay from "./Overlay.js";
const openLogin = () => {
  let loginIcon=document.querySelector("#loginIcon")
  loginIcon.addEventListener("click" ,()=>{
    let Login = document.createElement("div");
    Login.className = "loginContainer";
    Login.innerHTML = `
        <div class="login">
          <div class="titleContainer">
            <span class="title">آیا عضو هستید؟</span>
            </div>
            <div class="underTitleContainer"> 
            <span class="underTitle">با استفاده از شماره موبایل خود وارد شوید</span>
          </div>
           <input
            class="mobileNumber w-full bg-white focus:outline-none"
            type="search"
            placeholder="شماره موبایل"
            required
          />
              <button class="getCode">دریافت کد ورود <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg></button>
             <span class="finalDetailsPrice">خرید اول خود را تجربه می کنید ؟</span>
               <button class="signup">ثبت نام  <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg></button>
        `;

document.body.appendChild(Login) 
let login=document.querySelector(".loginContainer")
overlay();
setTimeout(() => {
  login.classList.add("open");
}, 60);
  })

    
  };
export default openLogin;
