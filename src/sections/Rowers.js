import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import {useCartCount} from 'gatsby-theme-shopify-manager';
import RowerCards from '../components/RowerCards';
import {useCartItems} from 'gatsby-theme-shopify-manager';
import {useCheckoutUrl} from 'gatsby-theme-shopify-manager';
import ReactFullpage from "@fullpage/react-fullpage";



const Rowers = ({ contentModuleId }) => {
  
  
    const data = useStaticQuery(graphql`
        query {
            allContentfulLayoutRowers {
                edges {
                  node {
                    heading
                    id
                  }
                }
              }

              allShopifyCollection(filter: {title: {in: "Rower"}}) {
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
 
    const content = data.allContentfulLayoutRowers.edges.find(edge => edge.node.id === contentModuleId);

    const productinfo = data.allShopifyCollection.edges[0].node.products;
  
    const checkoutUrl = useCheckoutUrl();
    //console.log(shopifyVariantID)

    
    return (
      <ReactFullpage
        scrollingSpeed= {700}
        fitToSection={true}
      
        navigation
         render={({ state, fullpageApi }) => {
        return (
          
         
              <div id="fullpage-wrapper">
                  {
                      productinfo.map(product => (
                        
                        <div className="section">

                          <RowerCards product={ product}  key={product}/>
                        
                         </div>
                      )) 
                  }
                  
                    
                 
             </div>
             
    
        );
      }}
    />
      
    );
};

Rowers.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default Rowers;