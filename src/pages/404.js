import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div class="flex flex-col align-middle justify-center" style={{
        margin: "0 auto",
        height: "100vh",
    }}>
      <center>
        <h1 class="text-grey-darkest">404</h1>
        <h3 class="text-grey-dark">oops, looks like that page doesn't exist</h3>
      </center>
    </div>
    <SEO title="404" style={{ position: "absolute" }}/>
  </Layout>
)

export default NotFoundPage
