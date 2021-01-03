import React from "react"
import Layout from "../components/main-layout/layout"
import SEO from "../components/main-layout/seo"
import Hero from "../components/hero"
import Container from '@material-ui/core/Container'
import Typography from "@material-ui/core/Typography"
import Services from '../components/services'
import Alliances from '../components/alliances'

const IndexPage = () => {
  return(
    <Layout>
      <SEO title="Home" />
      <Container maxWidth="lg">
        <Hero/>
        <Typography
          gutterBottom
          variant="h3"
          component="h1"
        >
          Servicios Integrales
        </Typography>    
        <Services />
        <br/>
        <br/>
        <Typography
          gutterBottom
          variant="h3"
          component="h1"
        >
          Aliados Colaboradores
        </Typography>
        <Alliances />
      </Container>
    </Layout>
  )
}

export default IndexPage
