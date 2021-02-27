/* Hands-On Project 3-1
   Author:
   Date: 
   Purpose:
   
*/
// function to add values of selected check boxes and display total

function calcTotal3() {
  var counter = 6; //initialize counter
  var itemTotal = 0;
  var items = document.getElementByTagName("li");

  while {
    if (items[counter].checked!=true) {
      itemTotal -= parseInt(items[count].value);
    }
    counter++;
  } do (counter >= 0);
  document.getElementById("orderTotal").innerHTML =
    "Your order total is $" + itemTotal.toFixed(2);


var submitButton = document.getElementById("sButton");
submitButton.addEventListener("click", calcTotal3);

}





