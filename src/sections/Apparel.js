import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import {useCartCount} from 'gatsby-theme-shopify-manager';

import {useCartItems} from 'gatsby-theme-shopify-manager';
import {useCheckoutUrl} from 'gatsby-theme-shopify-manager';
import FitCards from '../components/fitCards';

const Apparel= ({ contentModuleId }) => {

    const data = useStaticQuery(graphql`
        query {
          allContentfulLayoutApparel {
            edges {
              node {
                heading
                id
                shopifyProducts {
                  title
                  shopifyProduct
                }
              }
            }
          }

          allShopifyCollection(filter: {title: {in: "Apparel"}}) {
            edges {
              node {
                id
                products {
                  title
                  onlineStoreUrl
                  images {
                    originalSrc
                  }
                  priceRange {
                    maxVariantPrice {
                      amount
                    }
                  }
                  variants {
                    shopifyId
                  }
                }
                shopifyId
              }
            }
          }
              
        }

        
    `);
  
    const content = data.allContentfulLayoutApparel.edges.find(edge => edge.node.id === contentModuleId);
    const productinfo = data.allShopifyCollection.edges[0].node.products;
    const checkoutUrl = useCheckoutUrl();
    console.log(productinfo) 

    //console.log(shopifyVariantID)
    return (
      <section id="pricing" className="pricing section bg-gray">
      <div className="container mx-auto">
          <h2 className="section__title text-center mb-16" data-sal="fade" data-sal-easing="ease-in-cubic">{ content.node.heading }</h2>
         
             
              <div className="pricing__items " class="flex m-1 p-1 flex-wrap">
              
                 {
                      productinfo.map(product => (
                          <FitCards product={ product}  key={product}/>
                      )) 
                  }
                  
              </div>
              
      </div>
      <button class="w-30 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 m-auto">
              <p>
               <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                Complete Your Order →
               </a>
               </p>
          </button>
  </section>
    );
};

Apparel.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default Apparel;