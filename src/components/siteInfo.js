import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import styled from "styled-components";

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
  color: black;
  margin: auto 0;
  font-size: 1.2rem;
  position: fixed;
  transform: rotate(90deg);
  left: -5rem;
  top: 20%;
  z-index: 30;
  @media (max-width: 750px) {
    position: absolute;
  }

  @media (max-width: 775px) {
    font-size: 1rem;
    left: -4rem;
    top: 15%;
  }
`;

const SiteTitle = styled.div`
  font-weight: bold;
`;

const SiteTitleLink = styled(Link)`
  color: #ef6f6c;
  text-decoration: none;
  text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000, 0px 1px 0 #000, 0px -1px 0 #000, -1px 0px 0 #000,
    1px 0px 0 #000, 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000, 0px 1px 0 #000, 0px -1px 0 #000, -1px 0px 0 #000,
    1px 0px 0 #000, 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000, 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
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
