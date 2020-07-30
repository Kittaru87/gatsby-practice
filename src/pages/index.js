import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import Container from "../components/container"

export default function Home() {
  return (
    <Layout>
      <div style={{ color: `purple` }}>
        <Link to="/contact/">Contact</Link>
        <Link to="/about/">About</Link>
        <Link to="/about-css-modules/">About CSS Modules</Link>
        <Container>
          <Header headerText="Hello Gatsby" />
          <p> What a world.</p>
          <img src="https://source.unsplash.com/random/400x200" alt="" />
        </Container>
      </div>
    </Layout>
  )
}
