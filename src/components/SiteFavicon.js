import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Helmet from "react-helmet"

const SiteFavicon = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpFavicon {
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
      <Helmet>
        <link
          rel="icon"
          href={props.allWordpressWpFavicon.edges[0].node.url.source_url}
        />
      </Helmet>
    )}
  />
)

export default SiteFavicon