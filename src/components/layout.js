import React from "react";
import MainMenu from "./MainMenu";
import styled, { createGlobalStyle } from "styled-components";
// import SiteFavicon from "./SiteFavicon";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i');
  body, html{
    font-family: 'Open Sans', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
  }
`;



const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 3rem;
  /* margin-left: 40vw; */
  /* background-color: #f7e7e1; */
  @media (max-width: 525px) {
    margin-left: 0vw !important;
  }
  /* @media (max-width: 768px) {
    margin-left: 40vw;
  } */
`;

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    {/* <SiteFavicon /> */}

      <MainMenu />


    <LayoutWrapper>{children}</LayoutWrapper>
  </div>
);

export default Layout;

// const Layout = ({ children }) => (
//   <>
//     <StaticQuery query={graphql`
//       {
//         allWordpressWpFavicon{
//           edges{
//             node{
//               url{
//                 source_url
//               }
//             }
//           }
//         }
//       }
//     `} render={props => <Helmet><link rel="icon" href={props.allWordpressWpFavicon.edges[0].node.url.source_url} /></Helmet>} />
//     <MainMenu />
//     <PageContent>
//       {children}
//     </PageContent>
//   </>
// );

// export default Layout;
