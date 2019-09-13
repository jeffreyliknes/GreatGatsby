import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"
import SiteInfo from "./siteInfo"

const MainMenuWrapper = styled.div`
  display: flex;
  margin-left: -7.5rem;
  margin-top: 5vw;

`

const MenuItem = styled(Link)`
  color: black;
  display: block;
  padding: 16px 16px;
  
`

const MainMenuInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  /* width: 960px; */
  height: 100%;
  z-index: 3;
  flex-wrap: wrap;
`

const MainMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(
          filter: { name: { eq: "Main Menu" } }
        ) {
          edges {
            node {
              name
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `}
    render={props => (
      <MainMenuWrapper>
        <MainMenuInner>
          <SiteInfo />
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
            item => (
              <MenuItem to={`/${item.object_slug}`} key={item.title}>
                {item.title}
              </MenuItem>
            )
          )}
        </MainMenuInner>
      </MainMenuWrapper>
    )}
  >
  </StaticQuery>
)

export default MainMenu
