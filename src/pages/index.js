import React from "react"
import Layout from "../components/main-layout/layout"
import SEO from "../components/main-layout/seo"
import Hero from "../components/hero"
import Container from '@material-ui/core/Container'

const IndexPage = () => {
  return(
    <Layout>
      <SEO title="Home" />
      <Container maxWidth="lg">
        <Hero/>           
      </Container>
    </Layout>
  )
}

export default IndexPage
