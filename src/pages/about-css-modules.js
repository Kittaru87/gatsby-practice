import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import { Link } from "gatsby"

export default function AboutCSSModules() {
  return (
    <>
      <Link to="/">Home</Link>
      <Container>
        <Header headerText="Learning modules in CSS" />
        <p>CSS Modules are cool</p>
      </Container>
    </>
  )
}
