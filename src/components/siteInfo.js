import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import styled from "styled-components";

const SiteInfoWrapper = styled.div`
    flex-grow: 1;
    color: black;
    margin: auto 0;
    font-size: 1.8rem;
    position: absolute;
    transform: rotate(90deg);
    left: -8rem;
    top: 30%;
  /* @media (max-width: 768px) {
    font-size: 1.7rem;
    left: -10rem;
    top: 30%;
  } */
  @media (max-width: 575px) {
    font-size: 1.2rem;
    left: -4rem;
    top: 20%;
  }
`;

const SiteTitle = styled.div`
  font-weight: bold;
`;

const SiteTitleLink = styled(Link)`
  color: #ef6f6c;
  text-decoration: none;
  text-shadow: 1px 1px 0 #000,
    -1px 1px 0 #000,
    1px -1px 0 #000,
    -1px -1px 0 #000,
    0px 1px 0 #000,
    0px -1px 0 #000,
    -1px 0px 0 #000,
    1px 0px 0 #000,
    2px 2px 0 #000,
    -2px 2px 0 #000,
    2px -2px 0 #000,
    -2px -2px 0 #000,
    0px 2px 0 #000,
    0px -2px 0 #000,
    -2px 0px 0 #000,
    2px 0px 0 #000,
    1px 2px 0 #000,
    -1px 2px 0 #000,
    1px -2px 0 #000,
    -1px -2px 0 #000,
    2px 1px 0 #000,
    -2px 1px 0 #000,
    2px -1px 0 #000,
    -2px -1px 0 #000;


`;

const SiteInfo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
            }
          }
        }
      }
    `}
    render={props => (
      <SiteInfoWrapper>
        <SiteTitleLink to="/home">
          <SiteTitle>
            {props.allWordpressSiteMetadata.edges[0].node.name}
          </SiteTitle>
          <div>{props.allWordpressSiteMetadata.edges[0].node.description}</div>
        </SiteTitleLink>
      </SiteInfoWrapper>
    )}
  />
);

export default SiteInfo;
