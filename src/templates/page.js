import React from "react"
import Layout from "../components/layout"
import HomeBackground from "../components/homeImage.js";


export default ({ pageContext }) => ( 
  <Layout>
    <HomeBackground />
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)
