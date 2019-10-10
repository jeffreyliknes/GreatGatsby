import React from "react";
import Layout from "../components/layout";
import "../components/styles/contentStyle.scss";
import styled from 'styled-components';
import "../components/styles/mapLayout.scss";


const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 16px 0;
`;

const NewLayout = styled(Layout)`
    position: absolute;
    left: 0;
`;

const FeaturedLogo = styled.div`
display: flex;
justify-content: center;
`;


export default ({ pageContext, data }) => (
  <NewLayout className="map">
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />

    <FeaturedLogo>
      <FeaturedImage src={pageContext.featured_media.source_url} />
    </FeaturedLogo>
  </NewLayout>
);
