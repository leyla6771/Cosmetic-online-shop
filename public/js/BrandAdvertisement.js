const getBrandAdvertisementData = async () => {
    let htmlBrandAdvertisement = "";
    try {
      let res = await axios.get("http://localhost:3004/brandAdvertisement");
      res.data.map((elem) => {
        htmlBrandAdvertisement += `
        <div class="imageContainer" >
          <img src="${elem.brandImage}"/> </div>
              
             `;
      });
      document.querySelector("#footerHeaderList").innerHTML = htmlBrandAdvertisement;
    } catch (error) {
      console.log(error);
    }
  };
  export default getBrandAdvertisementData;