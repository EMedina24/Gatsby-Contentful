import React from 'react';
import PropTypes from 'prop-types';
import { useState } from "react";
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import Client from 'shopify-buy'
import {useCart} from 'gatsby-theme-shopify-manager';
import {useAddItemsToCart, useCartCount} from 'gatsby-theme-shopify-manager';
import {
  useRemoveItemFromCart,
  useCartItems,
} from 'gatsby-theme-shopify-manager';

function BikeCards({product}){


const cartItems = useCartItems();
const cart = useCart();
const cartCount = useCartCount();
const addItemsToCart = useAddItemsToCart();
const removeItemFromCart = useRemoveItemFromCart();

async function addToCart() {
const membershipDiv = document.getElementById("membershipSelect").value
console.log(product.variants[0].shopifyId)
console.log(membershipDiv)
  const items = [
  
    {
      variantId: product.variants[0].shopifyId,
      quantity: 1

    },
     {
      variantId: membershipDiv,
      quantity: 1

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
  const variantId = product.variants[0].shopifyId;

  try {
    await removeItemFromCart(variantId);
    alert('Successfully removed an item from your cart!');
  } catch {
    alert('There was a problem removing that item from your cart.');
  }
}



return(
  <>

<section class="text-gray-600 body-font overflow-hidden">
  <div class="ccontainer px-5 py-24 mx-auto ">
    <div class=" lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-1/2 lg:h-auto h-64 object-cover object-center rounded" src={product.images[0].originalSrc}/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">Echelon Fit</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
        <div class="flex mb-4 w-full">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p class="leading-relaxed">Prod discription goes here</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div class="flex">
            <span class="mr-3">Color</span>
            <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
          <div class="flex ml-6 items-center">
            <span class="mr-3">Echelon United Plan</span>
            <div class="relative">
              <select  id="membershipSelect"class=" rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base pl-3 pr-10">
                <option value="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDEzNTc0OTE4MTUyMg==">Monthly(39.99)</option>
                <option value="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDEzNTc0OTc3MTM0Ng=="> Yearly(99.99)</option>
                <option value="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMjkzMDUzOTUwMzY5OA==">2 Years(399.99)</option>
                
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">${product.priceRange.maxVariantPrice.amount}</span>
         
          <button onClick={addToCart}  class=" w-auto flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add To Cart</button>
          
        </div>
      </div>
    </div>
  </div>
</section>

  </>
)
}

export default BikeCards