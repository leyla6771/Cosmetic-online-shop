const getUnderHeaderPostDropDown = async () => {
  let htmlUnderHeaderDropDown = "";
  try {
    let res = await axios.get("http://localhost:3004/postDropDown");

    res.data.map((elem) => {
      htmlUnderHeaderDropDown += `
             <table class="Table" id="Table">
              <tr class="mainItems"> 
              <th>
              ${elem.postDropDownName}  
              </th>                                                  
              </tr>
              <tr>
              <td class="tableTd">
              ${elem.postDropDownitem1}
              </td>
              </tr>
               <tr>
              <td class="tableTd">
              ${elem.postDropDownitem2}
              </td>
              </tr>
               <tr>
              <td class="tableTd">
              ${elem.postDropDownitem3}
              </td>
              </tr>
               <tr>
              <td class="tableTd">
              ${elem.postDropDownitem4}
              </td>
              </tr>
                <tr>
              <td class="tableTd">
              ${elem.postDropDownitem5}
              </td>
              </tr>
                 <tr>
              <td class="tableTd">
              ${elem.postDropDownitem6}
              </td>
              </tr>
              <td class="tableTd">
              ${elem.postDropDownitem7}
              </td>
              </tr>
              <td class="tableTd">
              ${elem.postDropDownitem8}
              </td>
              </tr>
              <td class="tableTd">
              ${elem.postDropDownitem9}
              </td>
              </tr>
              <td class="tableTd">
              ${elem.postDropDownitem10}
              </td>
              </tr>
              <td class="tableTd">
              ${elem.postDropDownitem11}
              </td>
              </tr>
              <td class="tableTd">
              ${elem.postDropDownitem12}
              </td>
              </tr>
              </table>         
             `;
    });
    document.querySelector("#dropDown").innerHTML = htmlUnderHeaderDropDown;
  } catch (error) {
    console.log(error);
  }
  let tableTd=Array.from(document.querySelectorAll(".tableTd"))
  tableTd.map((elem)=>{
    if(elem.innerText=="undefined"){
      elem.innerText=""
    }else{false}
  })
};

export default getUnderHeaderPostDropDown;
