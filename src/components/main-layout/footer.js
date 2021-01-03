import React from "react"
import Copyright from "./copyright"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.secondary,
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="h6" component="h3">
          Contacto
        </Typography>
        <Typography variant="p" component="p">
        <a href="mailto:jherrera@iasic.com.mx">jherrera@iasic.com.mx</a>
        </Typography>
        <Typography variant="p" component="p">
          (+52) 818 253 3172
        </Typography>
        <Copyright />
      </Container>
    </footer>
  )
}

export default Footer
