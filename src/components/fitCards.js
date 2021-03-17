import React from 'react';
import PropTypes from 'prop-types';
import { useState } from "react";
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import Client from 'shopify-buy'
import {useCart} from 'gatsby-theme-shopify-manager';
import {useAddItemsToCart, useCartCount} from 'gatsby-theme-shopify-manager';
import {
  useRemoveItemFromCart
} from 'gatsby-theme-shopify-manager';

function FitCards({product}){
const addItemsToCart = useAddItemsToCart();
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



return(
  <>
  <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
  <img src={product.images[0].originalSrc}
       class="bg-gray-300 h-90 w-90 rounded-lg shadow-md  bg-center"/>
  <div class="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
    <div class="py-2 text-center font-bold uppercase tracking-wide text-gray-800">{product.title}</div>
    <div class="flex items-center justify-between py-2 px-3 bg-gray-400">
      <h1 class="text-gray-800 font-bold ">${product.priceRange.maxVariantPrice.amount}</h1>
      <button  onClick={addToCart} class=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">Add to cart</button>
    </div>
  </div>
</div>
  




  </>
)
}

export default FitCards