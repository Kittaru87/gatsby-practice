import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import { Link } from "gatsby"

export default function About() {
  return (
    <>
      <Link to="/">Home</Link>
      <Container>
        <Header headerText="About Gatsby" />
        <Header headerText="It's pretty cool" />
        <p>Such wow. Very React.</p>
      </Container>
    </>
  )
}
