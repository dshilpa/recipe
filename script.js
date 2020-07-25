var originalItems = [2, 3,1, 0.5, 1.25, 4, 1, 1.25];
function multiply(multiplier) {
  console.log(originalItems[0]);
 // let original = getOriginalData();
  let items = document.getElementsByClassName("li1");
 
  for(let i=0; i<items.length; i++) { 
    let quantity1 = originalItems[i] * multiplier;
    items[i].innerHTML=quantity1 + " ";
     }
}
