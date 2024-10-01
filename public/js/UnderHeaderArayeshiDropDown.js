const getUnderHeaderArayeshiDropDown = async () => {
  let htmlUnderHeaderDropDown = "";

  try {
    let res = await axios.get("http://localhost:3004/arayeshiDropDown");
    res.data.map((elem) => {
      htmlUnderHeaderDropDown += `
       
              <table class="Table" id="Table">
              <tr class="mainItems"> 
              <th>
              ${elem.arayeshiDropDownName}  
              </th>                                                  
              </tr>
              <tr>
              <td class="tableTd">
              ${elem.arayeshiDropDownitem1}
              </td>
              </tr>
               <tr>
              <td class="tableTd">
              ${elem.arayeshiDropDownitem2}
              </td>
              </tr>
               <tr>
              <td class="tableTd">
              ${elem.arayeshiDropDownitem3}
              </td>
              </tr>
               <tr>
              <td class="tableTd">
              ${elem.arayeshiDropDownitem4}
              </td>
              </tr>
                <tr>
              <td class="tableTd">
              ${elem.arayeshiDropDownitem5}
              </td>
              </tr>
                 <tr>
              <td class="tableTd">
              ${elem.arayeshiDropDownitem6}
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

export default getUnderHeaderArayeshiDropDown;
