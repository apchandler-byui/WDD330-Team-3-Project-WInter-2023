import { getLocalStorage } from "./utils.mjs";

const cartItems = getLocalStorage("so-cart");

function calcNumCartItems(cartItems){
    // calcuates number of items in cart
    let numberInCart = 0;
    for (let i = 0; i < cartItems.length; i++) {
      numberInCart += cartItems[i]['Quantity'];
    }
    return numberInCart;
}


function totalItemsInCart(items) {
    if (items >= 1) {
    let element = document.getElementById("numberOfItems");
    element.classList.add("cartItems_total");
    document.getElementById("total_items_in_cart").innerHTML = items;
    }
}

let cartTotal = calcNumCartItems(cartItems);

totalItemsInCart(cartTotal);
 