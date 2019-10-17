import React from "react";
import Layout from "../components/layout";
import PortfolioItems from "../components/PortfolioItems";
import PortfolioImage from '../components/portfolioImage';
import "../components/styles/siteInfoStyle.scss";






export default ({ pageContext }) => (
  <Layout>
    <PortfolioImage />


    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />

    <PortfolioItems />
  </Layout>
);
