import React from "react";
import Layout from "../components/layout";
import "../components/styles/contentStyle.scss";
import BackgroundImage from "../components/homeImage";

export default ({ pageContext, data }) => (
  <Layout>
    <BackgroundImage grayscale="true"></BackgroundImage>
    <div className="right-margin">
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </div>
  </Layout>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "lightFrontPage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
