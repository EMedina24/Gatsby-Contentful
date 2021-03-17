import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import ProductCTA from '../components/productCTA';
import ProductGrid from '../components/productGrid'


const Product = ({ contentModuleId }) => {

    const data = useStaticQuery(graphql`
        query {
          allContentfulLayoutProduct {
            edges {
              node {
                productCtAs {
                  ... on ContentfulProductCta {
                    id
                    buttonTitle
                    buttonUrl
                    copy {
                      copy
                    }
                    header
                    ctAimg {
                      file {
                        url
                      }
                    }
                    price
                    subHeader
                  }
                  ... on ContentfulProductCta2 {
                    id
                    buttonTitle
                    buttonUrl
                    price
                    subHeader
                    copy {
                      copy
                    }
                    header
                    ctAimg {
                      file {
                        url
                      }
                    }
                  }
                }
                header
                id
              }
            }
          }
        }
    `);
  
    const content = data.allContentfulLayoutProduct.edges.find(edge => edge.node.id === contentModuleId);

    return (
        <section id="pricing" className="pricing section bg-gray" class="bg-white">
            <div className="container mx-auto">
              <ProductGrid/>
                <h2 className="section__title text-center mb-16" data-sal="fade" data-sal-easing="ease-in-cubic">{ content.node.header }</h2>
                    <div className="pricing__items">  
                                <ProductCTA CTA={ content.node} />  
                    </div>
                
                
            </div>
        </section>
    );
};

Product.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default Product;