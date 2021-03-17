import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import {useCartCount} from 'gatsby-theme-shopify-manager';

import {useCartItems} from 'gatsby-theme-shopify-manager';
import {useCheckoutUrl} from 'gatsby-theme-shopify-manager';
import BikeCards from '../components/BikeCards';
import ReactFullpage from "@fullpage/react-fullpage";

import '../assets/css/components/fullpagestuff.css'

const Bikes = ({ contentModuleId }) => {

    const data = useStaticQuery(graphql`
        query {
          allContentfulLayoutBikes {
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

          allShopifyCollection(filter: {title: {in: "Connect Bikes"}}) {
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
    
    const content = data.allContentfulLayoutBikes.edges.find(edge => edge.node.id === contentModuleId);
    const productinfo = data.allShopifyCollection.edges[0].node.products;
   
    const checkoutUrl = useCheckoutUrl();


    //console.log(shopifyVariantID)
    return (
      <ReactFullpage
        scrollingSpeed= {700}
        
        fitToSection={true}
        navigation
         render={({ state, fullpageApi }) => {


      if (state.callback === "onLeave") {
        if (state.direction === "down") {
          console.log("going down..." + state.origin.index);
        }
      }
        return (
          
         
              <div id="fullpage-wrapper">
                  {
                      productinfo.map(product => (
                        
                        <div className="section">
                        
                         
               
                          <BikeCards product={ product}  key={product}/>
                         
                         </div>
                      )) 
                  }
                  
                    
                 
             </div>
             
    
        );
      }}
    />
    );
};

Bikes.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default Bikes ;