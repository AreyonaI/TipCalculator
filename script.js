const button = document.querySelector("button");
const output = document.querySelector(".output");
console.log(button);
button.addEventListener("click",function(){
    const cost = document.querySelector("input");
    console.log(cost.value *0.15);
    console.log(cost.value *0.18);
    console.log(cost.value *0.20);
  
    let tip15 = (cost.value *0.15).toFixed(2);
    let tip18 = (cost.value *0.18).toFixed(2);
    let tip20 = (cost.value *0.20).toFixed(2);
  
    let temp = `
    <table> 
      <tr>
        <th>Service Quality</th> 
        <th>Percent</th> 
        <th>Tip Amount</th>              
      </tr> 
      <tr> 
        <td>Good</td> 
        <td>15%</td> 
        <td>$${tip15} is 15% of $${cost.value}</td>
      </tr>
      <tr>
        <td>Great</td> 
        <td>18%</td> 
        <td>$${tip18} is 18% of $${cost.value}</td>
      </tr>
      <tr>
        <td>Excellent</td>
        <td>20%</td> 
        <td>$${tip20} is 20% of $${cost.value}</td>
      </tr>
    </table>`
    output.innerHTML = temp;
})