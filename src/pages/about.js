import React from "react"
import { graphql } from "gatsby"
// import Header from "../components/header"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <>
      <Layout>
        <div>
          <h1>About {data.site.siteMetadata.title} </h1>
          <p>Such wow. Very React.</p>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
