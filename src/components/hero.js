import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const SLOGAN = "Usted tiene la iniciativa, nosotros la tecnologia"
const DESCRIPTION =
  "Con más de 25 años de proveer servicios de integración y asesoría en sistemas de información y comunicaciones, de la mano con los aliados más grandes del mercado nacional e internacional."
const CONTACT_US = "Contáctanos"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: "url(/images/hero-bg.jpg)",
    marginTop: "2em",
    marginBottom: "2em",
  },
  contentSpace: {
    maxWidth: "500px",
    margin: "2em",
  },
  action: {
    border: `1px solid ${theme.palette.text.secondary}`,
    color: theme.palette.text.secondary,
  },
}))

const Hero = ({ children }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent className={classes.contentSpace}>
        <Typography
          className
          color="textSecondary"
          gutterBottom
          variant="h4"
          component="h1"
        >
          {SLOGAN}
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          variant="subtitle1"
          component="body2"
          align="justify"
        >
          {DESCRIPTION}
        </Typography>
      </CardContent>
      <CardActions className={classes.contentSpace}>
        <Button
          variant="outlined"
          className={classes.action}
          onClick={() => {
            window.open("mailto:jherrer@isasic.com.mx")
          }}
        >
          {CONTACT_US}
        </Button>
      </CardActions>
    </Card>
  )
}

export default Hero
