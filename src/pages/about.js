import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function About() {
  return (
    <>
      <Layout>
        <Link to="/">Home</Link>
        <Header headerText="About Gatsby" />
        <p>Such wow. Very React.</p>
      </Layout>
    </>
  )
}
