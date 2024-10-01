const getProductsData = async () => {
  let htmlProducts = "";
  try {
    let res = await axios.get("http://localhost:3004/products");
    res.data.map((elem) => {
      htmlProducts += `
             <a class="productLink " id="productLink" href="#" >
              <img id="productImage"
                class=" productImage "
                src="${elem.image}"
                alt="${elem.productName}"
              />
              <div class="productName" id="productName">${elem.productName}</div>
           `;
    });
    document.querySelector("#products").innerHTML = htmlProducts;
  } catch (error) {
    console.log(error);
  }
};
export default getProductsData;
