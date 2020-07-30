import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h1>Welcome to {data.site.siteMetadata.title}</h1>
        <p> What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <p>
          {" "}
          This is a fake site to practice using Gatsby. Isn't it wonderful!
        </p>
        <p>Now to try some GraphQL Queries</p>
        <h3>Amazing Pandas Eating Things</h3>
        <div>
          <img
            src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
            alt="Group of pandas eating bamboo"
          />
        </div>
      </div>
    </Layout>
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
