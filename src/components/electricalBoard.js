import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
// import "../components/styles/contentStyle.scss";


const BackgroundSection = ({ Board }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "gauravdeep-singh-bansal--11Q1miT5Qc-unsplash.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      } 
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          style={{
            width: "40%",
            height: "100vh",
            top: 0,
            left: 0,
            position: "fixed",
          }}
          Tag="section"
          className={Board}
          fluid={imageData}
          backgroundColor={`#040e18`}
        ></BackgroundImage>
      );
    }}
  />
);

const ElectricalBoard = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default ElectricalBoard;
