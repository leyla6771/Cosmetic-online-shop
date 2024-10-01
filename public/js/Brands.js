const getBrandData = async () => {
    let htmlBrand = "";
    try {
      let res = await axios.get("http://localhost:3004/brands");
      res.data.map((elem) => {
        htmlBrand += `
            <a class="brandLink " id="brandLink" href="#" >
            <div class="brandImageContainer">
              <img id="brandImage"
                class=" brandImage "
                src="${elem.brandImage}"
                alt="${elem.brandName}"/>
             
              </div>
               <div class="brandName" id="brandName">${elem.brandName}</div>
         `;
      });
      document.querySelector("#brands").innerHTML = htmlBrand;
    } catch (error) {
      console.log(error);
    }
  };
  export default getBrandData;