import React from "react";
import Layout from "../components/layout";
import HomeBackground from "../components/homeImage.js";

// import "../components/SideImage.scss";

export default ({ pageContext }) => (
  <Layout>
    <div
      style={{
        width: "40%",
        height: "100vh",
        top: 0,
        left: 0,
        position: "fixed",
      }}
    >
      <HomeBackground />
    </div>
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
);
