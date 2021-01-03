import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    height: 375,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  media: {
    height: 140,
  },
}))

const ServiceCard = ({ img, text, textTitle }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea
        onClick={() => {
          window.open("mailto:jherrer@isasic.com.mx")
        }}
      >
        <CardMedia className={classes.media} image={img} title={textTitle} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {textTitle}
          </Typography>
          <Typography variant="body2" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            window.open("mailto:jherrer@isasic.com.mx")
          }}
        >
          Contáctanos
        </Button>
      </CardActions>
    </Card>
  )
}

export default ServiceCard
