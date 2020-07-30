import React from "react"
import Container from "./container"
import { Link } from "gatsby"
import "./layout.css"

const ListLink = props => (
  <li className="nav-list">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div>
      <Container>
        <header>
          <Link to="/" className="logo">
            <h3>MyRadSite</h3>
          </Link>
          <ul className="unordered-nav-list">
            <ListLink to="/contact/">Contact</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/about-css-modules/">About CSS Modules</ListLink>
          </ul>
        </header>
        {children}
      </Container>
    </div>
  )
}
