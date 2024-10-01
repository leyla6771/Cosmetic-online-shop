const getFooterAdvData = async () => {
    let htmlFooterAdv = "";
    try {
      let res = await axios.get("http://localhost:3004/footerAdvertisement");
      res.data.map((elem) => {
        htmlFooterAdv += `
               <a class="FooterAdvLink group" id="FooterAdvLink" href="#" >
                <img id="FooterAdvImage"
                  class=" FooterAdvImage "
                  src="${elem.advImage}"
                />
                <div class="FooterAdvName" id="FooterAdvName">${elem.advName}</div>
                <div class="FooterAdvDiscription">${elem.advDiscription}</div>
             `;
      });
      document.querySelector("#footerAdv").innerHTML = htmlFooterAdv;
    } catch (error) {
      console.log(error);
    }
  };
  export default getFooterAdvData;