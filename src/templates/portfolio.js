import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
// import { graphql } from "gatsby";
import ElectricalBoard from "../components/electricalBoard";
import "../components/styles/portfolioImage.scss";
import Logo from "../components/logo";
import Footer from "../components/footer";
import "../components/styles/portfolioStyle.scss";

const FeaturedImage = styled.img`
  width: 10%;
`;

const ImageWrapper = styled.div`
  /* position: absolute; */
  /* top: 0; */
  /* left: 0;
  width: 40vw;
  height: 100vh; */
`;

const ImageRows = styled.div`
  left: 0;
  position: relative;
  background-color: white;
  padding: 2rem 0rem 2rem 3rem;
  margin-left: calc(-40vw - 3rem);
  margin-top: 15rem;
  z-index: 10;
  @media only screen and (max-width: 750px) {
    margin-left: 0;
    padding-left: 0rem;
  }
`;

const PortfolioGrid = styled.div`
  display: flex;
  
`;

export default ({ data, pageContext }) => (
  <Layout>
    <Logo className="portfolioLogo" />
    <h1>{pageContext.title}</h1>
    <ElectricalBoard />
  
    <ImageWrapper>
      {/* <a
        href={pageContext.acf.portfolio_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {pageContext.acf.portfolio_url}
      </a> */}

      <FeaturedImage src={pageContext.featured_media.source_url} />
    </ImageWrapper>
    <ImageRows>
      <PortfolioGrid
        dangerouslySetInnerHTML={{ __html: pageContext.content }}
      />
    </ImageRows>
    <Footer />
  </Layout>
);

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "gatsby-astronaut.png" }) {
//       childImageSharp {
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `;
