import React from "react"
import Container from "./container"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <div>
      <Container>{children}</Container>
    </div>
  )
}
