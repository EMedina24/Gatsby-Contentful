import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

import Section from '../sections/section';
import {ContextProvider} from 'gatsby-theme-shopify-manager';


export const query = graphql`
    query($slug: String!) {
        contentfulLayout(slug: { eq: $slug }) {
            id
            slug
            title
            description
            contentful_id
            menu {
                name
                type
                menuItems {
                    id
                    title
                    url
                }
            },
            contentModule {
                ... on Node {
                    id
                    __typename
                }
            }
        }
    }
`;






export default function PageTemplate({ data }) {

const shopName = 'echelon-store';
const accessToken = 'b785f4ee1f8ba77ab66dce258f1b4b8b';
  
   
    const title = data.contentfulLayout.title;
    const description = data.contentfulLayout.description;
    const menus = data.contentfulLayout.menu;
    const contentModule = data.contentfulLayout.contentModule;

    return (
        <ContextProvider shopName={shopName} accessToken={accessToken}>
        <Layout menus={ menus }>
            <SEO title={ title } description={ description } />
            {
                contentModule && contentModule.length > 0 &&
                contentModule.map(content => (
                   
                    <Section contentModuleId={ content.id } type={ content.__typename } key={content.id}/>
                    
                ))
            }
        </Layout>
      </ContextProvider>
    );

  
  
}
