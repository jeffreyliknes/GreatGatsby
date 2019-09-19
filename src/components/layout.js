import React from 'react'
import MainMenu from './MainMenu'
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i');
  body, html{
    font-family: 'Open Sans', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
  }
`

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  margin-left: 40vw;
  padding: 3rem;
  /* background-color: #f7e7e1; */
  @media (max-width: 425px) {
    margin-left: 0vw !important;
  }
  @media (max-width: 768px) {
    margin-left: 40vw;
  }
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  </div>
)

export default Layout