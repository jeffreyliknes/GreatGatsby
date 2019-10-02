import React from "react";
import Layout from "../components/layout";
import "../components/styles/contentStyle.scss";
import BackgroundImage from "../components/homeImage";
import styled from "styled-components";

const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 16px 0;
`;

export default ({ pageContext, data }) => (
  <Layout>
    <BackgroundImage />
<h1>hyyyy</h1>
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    <div>
      <FeaturedImage src={pageContext.featured_media.source_url} />
    </div>
  </Layout>
);
