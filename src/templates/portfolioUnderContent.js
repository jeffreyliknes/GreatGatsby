import React from "react";
import Layout from "../components/layout";
import PortfolioItems from "../components/PortfolioItems";
// import Background from "solar.png";


export default ({ pageContext }) => (
  <Layout>
    {/* <Background /> */}
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    <PortfolioItems />
  </Layout>
);
