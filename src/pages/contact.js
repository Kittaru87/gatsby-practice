import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default function Contact() {
  return (
    <div style={{ color: "teal" }}>
      <Link to="/">Home</Link>
      <Container>
        <Header headerText="Contact" />
        <p>Send us a message!</p>
      </Container>
    </div>
  )
}
