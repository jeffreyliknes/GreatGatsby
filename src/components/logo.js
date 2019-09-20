import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import styled from 'styled-components';



const LogoInit = styled.img`
    max-width: 100px;
    margin: 16px;
`

const Logo = () => (
    <StaticQuery query={graphql`
    {   
        allWordpressWpLogo{
            edges{
              node{
                url {
                  source_url
                }
              }
            }
          }
      }
`} render={props => (
    <LogoInit src={props.allWordpressWpLogo.edges[0].node.url.source_url}/> 
)} />
);

export default Logo;