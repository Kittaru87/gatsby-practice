import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"

export default function Home() {
  return (
    <Layout>
      <div>
        <Header headerText="Hello Gatsby" />
        <p> What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <p>
          {" "}
          This is a fake site to practice using Gatsby. Isn't it wonderful!
        </p>
      </div>
    </Layout>
  )
}
