import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Echelon from '../assets/images/echelon.png'
import {useCartCount} from 'gatsby-theme-shopify-manager';

const Header = ({ menus }) => {


    const data = useStaticQuery(graphql`
        query {
            contentfulMenuItem{
                menu {
                  id
                  menuItems {
                    id
                    title
                    url
                  }
                }
              }
        }
    `);


const cartCount = useCartCount();
const menuItemsActual = data.contentfulMenuItem.menu[0].menuItems
const [navbarOpen, setNavbarOpen] = React.useState(false);
console.log([menuItemsActual])
  return(
<>

 <nav class=" z-50 bg-white shadow dark:bg-gray-800 fixed w-full ">
        <div class="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <div>
                    <a class="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300" href="/">
                    <img class="h-8 w-auto sm:h-10" src={Echelon}/>
                    </a>
                </div>
                
               
                <div class="flex md:hidden">
                    <button   onClick={() => setNavbarOpen(!navbarOpen)} type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

          
            <div className={"items-center md:flex " + (navbarOpen ? " flex" : " hidden")}>
                <div class="flex flex-col md:flex-row md:mx-6">
                {menuItemsActual.map((index) => (
                    <Link to={index.url}>
                    <a class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href="#">{index.title}</a>
                   </Link>
                    ))}
                </div>

                <div class="flex justify-center md:block">
                    <a class=" inline-flex relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="/cart">
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                     ( {cartCount})
                    </a>
                    
                </div>
            </div>
        </div>
    </nav>



</>

  )



}

export default Header;


         
    


