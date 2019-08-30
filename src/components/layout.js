import React from "react"
import MainMenu from "./MainMenu"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap');

body, html{
  font-family: 'Open Sans', sans-serif;
  margin: 0 !important;
  padding: 0 !important;
}`

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  @media only screen and (min-width: 308px) {
    width: 75%;
  }
  @media only screen and (min-width: 768px) {
    width: 75%;
  }
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>{children}</LayoutWrapper>
  </div>
)

export default Layout
