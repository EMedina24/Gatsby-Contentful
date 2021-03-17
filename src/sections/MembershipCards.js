import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import {useCartCount} from 'gatsby-theme-shopify-manager';

import {useCartItems} from 'gatsby-theme-shopify-manager';
import {useCheckoutUrl} from 'gatsby-theme-shopify-manager';
import FitCards from '../components/fitCards';

const MemberShipCards= ({ contentModuleId }) => {

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
      <div>test</div>
    );
};

MemberShipCards.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default MemberShipCards;