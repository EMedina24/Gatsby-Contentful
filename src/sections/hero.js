import React from 'react';
import PropTypes from 'prop-types';
import { useState } from "react";
import { useStaticQuery, graphql } from 'gatsby';

const Hero = ({ contentModuleId }) => {
    
    const data = useStaticQuery(graphql`
        query {
            allContentfulLayoutHero {
                edges {
                    node {
                        id
                        heading
                        subheading
                        description {
                            description
                        }
                        ctaText
                        ctaUrl
                        image {
                            fluid(quality: 100) {
                                ...GatsbyContentfulFluid
                            }
                        }
                    }
                }
            }
        }
    `);

    const content = data.allContentfulLayoutHero.edges.find(edge => edge.node.id === contentModuleId);
   
    
    return (
       <>
         <div class="relative bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg><div class="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">{ content.node.heading }</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          { content.node.description.description }
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a href={ content.node.ctaUrl } class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10">
              { content.node.ctaText }
              </a>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={ content.node.image.fluid.src } alt=""/>
  </div>
</div>
  
       
       </>
    );
};

Hero.propTypes = {
    contentModuleId : PropTypes.string.isRequired
}

export default Hero;