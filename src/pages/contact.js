import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
      <div>
        <Header headerText="Contact" />
        <p>Send us a message!</p>
        <p>
          <a href="mailto:me@example.com">me@example.com</a>
        </p>
      </div>
    </Layout>
  )
}
