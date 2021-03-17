import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types';


import {useCheckoutUrl} from 'gatsby-theme-shopify-manager';
import {useAddItemsToCart, useCartCount} from 'gatsby-theme-shopify-manager';
import {useRemoveItemFromCart,useCartItems,} from 'gatsby-theme-shopify-manager';
import {useCart} from 'gatsby-theme-shopify-manager';
import {useUpdateItemQuantity,} from 'gatsby-theme-shopify-manager';




const Cart = ({ contentModuleId },{product}) => {

  const checkoutUrl = useCheckoutUrl();
  const cartCount = useCartCount();
  const cartItems = useCartItems();
  const [quantity, setQuantity] = useState(1);
  const updateItemQuantity = useUpdateItemQuantity();
  const addItemsToCart = useAddItemsToCart();
  const removeItemFromCart = useRemoveItemFromCart();
  const cart = useCart();



async function updateQuantity(varientIDActual) {



  if (varientIDActual == undefined ) {
    return;
  }

  const variantId = varientIDActual;
  console.log(varientIDActual)
  try {
    await updateItemQuantity(variantId, quantity);
    alert('Successfully updated the item quantity!');
  } catch {
   
    alert("refresh page ");
  }
}



async function addToCart() {
  const items = [
    {
      variantId: product.variants[0].shopifyId,
      quantity: 1,
    },
  ];

  try {
    await addItemsToCart(items);
    alert('Successfully added that item to your cart!');
  } catch {
    alert('There was a problem adding that item to your cart.');
  }
}

async function removeFromCart() {
  if (cartItems.length < 1) {
    return;
  }
  const variantId = cartItems[0].variant.id;

  try {
    await removeItemFromCart(variantId);
    alert('Successfully removed an item from your cart!');
  } catch {
    alert('There was a problem removing that item from your cart.');
  }
}

if (cart == undefined) {
  return <p>The cart object is currently null.</p>;
}


    return (
        <>

  <div class="container mx-auto mt-10">
    <div class="flex shadow-md my-10">
      <div class="w-3/4 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">{cartCount} Items</h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        {cartItems.map((lineItem) => (
        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5"> 
            <div class="w-20">
              <img class="h-24" src={lineItem.variant.image.src} alt=""/>
            </div>
           
            <div class="flex flex-col justify-between ml-4 flex-grow">
             <span class="font-bold text-sm">{lineItem.title}</span>
           
              <button  onClick={removeFromCart}  class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>
            </div>
               
          </div>

           <div class="flex-wrap justify-center w-1/5">
            <input class="border-2 border-black text-center" onChange={(event) => setQuantity(Number(event.target.value))} type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" defaultValue={lineItem.quantity}></input>
            <button class="bg-red-500 w-full rounded py-0.5 my-1.5 text-white" onClick={() => updateQuantity(lineItem.variant.id)}>
            update 
           </button>
          </div>

       
          <span class="text-center w-1/5 font-semibold text-sm">{lineItem.variant.price}</span>
          <span class="text-center w-1/5 font-semibold text-sm">{lineItem.variant.price}</span>
        </div>
          ))}  
        


        <a href="/" class="flex font-semibold text-indigo-600 text-sm mt-10">
      
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </a>
      </div>

      <div id="summary" class="w-1/4 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">Items {cartCount}</span>
          <span class="font-semibold text-sm">${cart.totalPrice}</span>
        </div>
        <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select class="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div class="py-10">
          <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full"/>
        </div>
        <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>${cart.totalPrice}</span>
          </div>
          <a href={checkoutUrl} class="bg-red-500 font-semibold hover:bg-red-600 py-3 text-sm text-white uppercase w-full">Checkout</a>
        </div>
      </div>

    </div>
  </div>


        </>
    );
};

Cart.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default Cart;