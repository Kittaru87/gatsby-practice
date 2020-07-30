import React from "react"
import Styles from "./header.module.css"

export default function Header(props) {
  return <h1 className={Styles.underline}>{props.headerText}</h1>
}
