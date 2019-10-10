import React from "react";
import MainMenu from "./MainMenu";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i');
  body, html{
    font-family: 'Open Sans', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
  }
  h1, h2{
    display: flex;
   
    justify-content: center;
  }
`;

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
  @media (max-width: 525px) {
    margin-left: 0vw !important;
  }
`;

const Layout = ({ children }) => (
  <div className="mainMenu__Layout__wrapper">
    <GlobalStyles />

    <MainMenu />

    <LayoutWrapper>{children}</LayoutWrapper>
  </div>
);

export default Layout;
