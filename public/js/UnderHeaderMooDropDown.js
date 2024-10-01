const getUnderHeaderMooDropDown = async () => {
  let htmlUnderHeaderDropDown = "";
  try {
    let res = await axios.get("http://localhost:3004/mooDropDown");
    res.data.map((elem) => {
      htmlUnderHeaderDropDown += `
               <table class="Table" id="Table">
              <tr class="mainItems"> 
              <th>
              ${elem.mooDropDownName}  
              </th>                                                  
              </tr>
              <tr>
              <td class="tableTd">
              ${elem.mooDropDownitem1}
              </td>
              </tr>
               <tr>
              <td class="tableTd">
              ${elem.mooDropDownitem2}
              </td>
              </tr>
               <tr>
              <td class="tableTd">
              ${elem.mooDropDownitem3}
              </td>
              </tr>
               <tr>
              <td class="tableTd">
              ${elem.mooDropDownitem4}
              </td>
              </tr>
                <tr>
              <td class="tableTd">
              ${elem.mooDropDownitem5}
              </td>
              </tr>
                 <tr>
              <td class="tableTd">
              ${elem.mooDropDownitem6}
              </td>
              </tr>
              <td class="tableTd">
              ${elem.mooDropDownitem7}
              </td>
              </tr>
              <td class="tableTd">
              ${elem.mooDropDownitem8}
              </td>
              </tr>
              <td class="tableTd">
              ${elem.mooDropDownitem9}
              </td>
              </tr>
              <td class="tableTd">
              ${elem.mooDropDownitem10}
              </td>
              </tr>
              <td class="tableTd">
              ${elem.mooDropDownitem11}
              </td>
              </tr>
              <td class="tableTd">
              ${elem.mooDropDownitem12}
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

export default getUnderHeaderMooDropDown;
