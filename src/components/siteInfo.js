import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
  color: black;
  margin: auto 0;
`

const SiteTitle = styled.div`
  font-weight: bold;
`

const SiteTitleLink = styled(Link)`
  color: black;
  text-decoration: none;
`

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
)

export default SiteInfo
