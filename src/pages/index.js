import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <center>
      <h1>Hi people</h1>
      <p>Welcome to my site.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </center>
  </>
)

export default IndexPage
