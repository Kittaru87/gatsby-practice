import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { Link, graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <Layout>
      {/* <div>
        <h1>Welcome to {data.siteMetadata.title}</h1>
        <p> What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <p>
          {" "}
          This is a fake site to practice using Gatsby. Isn't it wonderful!
        </p>
        <p>Now to try some GraphQL Queries</p>
      </div>
      <div> */}
      <h2
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
        `}
      >
        Amazing Pandas Eating Things
      </h2>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
      {/* </div> */}
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
