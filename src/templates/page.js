import React from "react";
import Layout from "../components/layout";
import "../components/styles/contentStyle.scss";
import "../components/styles/logoStyle.scss";
import BackgroundImage from "../components/homeImage";
// import styled from "styled-components";
import SiteInfo from "../components/siteInfo";


// const FeaturedImage = styled.img`
//   max-width: 300px;
//   margin: 16px 0;
// `;

// const FeaturedLogo = styled.div`
// display: flex;
// justify-content: center;
// `;

export default ({ pageContext, data }) => (
  <Layout>
    <SiteInfo />
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    {/* <FeaturedLogo>
      <FeaturedImage src={pageContext.featured_media.source_url} />
    </FeaturedLogo> */}
    <BackgroundImage />
  </Layout>
);
