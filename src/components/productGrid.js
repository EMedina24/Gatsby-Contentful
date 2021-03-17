import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';


const ProductGrid = ({ CTA }) => {

    const data = useStaticQuery(graphql`
    query {
        allContentfulProducts5Col {
            edges {
              node {
                product1 {
                  file {
                    url
                  }
                }
                product2 {
                  file {
                    url
                  }
                }
                product3 {
                  file {
                    url
                  }
                }
                product4 {
                  file {
                    url
                  }
                }
                product5 {
                  file {
                    url
                  }
                }
              }
            }
          }
    }
`);


const productimg = data.allContentfulProducts5Col.edges;
console.log(productimg)
return(

    <div class="grid grid-cols-5  center flex bg-white mt-8">
  <Link to="/bikes">
    <img  class="w-40 m-4 p-4"src={productimg[0].node.product1.file.url}></img>
    </Link>
    <img class="w-40 m-4 p-4" src={productimg[0].node.product2.file.url}></img>

    <img class="w-40 m-4 p-4"  src={productimg[0].node.product3.file.url}></img>

    <img  class="w-40 m-4 p-4" src={productimg[0].node.product4.file.url}></img>

    <img class="w-40 m-4 p-4" src={productimg[0].node.product5.file.url}></img>
    
  </div>

);


};

ProductGrid .propTypes = {
    plan: PropTypes.object.isRequired
};


export default ProductGrid;