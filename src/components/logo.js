

import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

const SiteLogoWrapper = styled.div`
  display: flex;
  width: 17rem;
  height: 100px;
  padding: 20px 20px 20px 0;
  margin: 0 auto;
`
const SiteLogoImage = styled.img`
  max-width: 100%;
`

const Logo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpLogo {
          edges {
            node {
              url {
                source_url
              }
            }
          }
        }
      }
    `}
    render={props => (
      <SiteLogoWrapper>
        <SiteLogoImage
          src={props.allWordpressWpLogo.edges[0].node.url.source_url}
          alt="Full Spectrum Logo"
        />
      </SiteLogoWrapper>
    )}
  />
)
export default Logo;