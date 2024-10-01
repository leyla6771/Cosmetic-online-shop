const getFooterDetails = async () => {
    let htmlfooterDetails = "";
  
    try {
      let res = await axios.get("http://localhost:3004/footerDetails");
      res.data.map((elem) => {
        htmlfooterDetails += `
         
                <table class="Table" id="Table">
                <tr class="footerDetailsMainItems"> 
                <th>
                ${elem.footerDetailsName}  
                </th>                                                  
                </tr>
                <tr>
                <td class="footerDetailsTableTd">
                ${elem.footerDetailsitem1}
                </td>
                </tr>
                 <tr>
                <td class="footerDetailsTableTd">
                ${elem.footerDetailsitem2}
                </td>
                </tr>
                 <tr>
                <td class="footerDetailsTableTd">
                ${elem.footerDetailsitem3}
                </td>
                </tr>
                 <tr>
                <td class="footerDetailsTableTd">
                ${elem.footerDetailsitem4}
                </td>
                </tr>
                </table>         
               `;
      });
  
      document.querySelector("#footerDetails").innerHTML = htmlfooterDetails;
    } catch (error) {
      console.log(error);
    }
    let tableTd=Array.from(document.querySelectorAll(".footerDetailsTableTd"))
    tableTd.map((elem)=>{
      if(elem.innerText=="undefined"){
        elem.innerText=""
      }else{false}
    })
  };
  
  export default getFooterDetails;