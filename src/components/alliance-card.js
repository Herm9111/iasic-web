import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  root: {
    
  },
  logo: {
    height: 40,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}))

const AllianceCard = ({ img, link, name }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <a href={link}>
      <CardActionArea>
        <CardContent>
          <img className={classes.logo} src={img} alt={name}></img>
        </CardContent>
      </CardActionArea>
      </a>
    </Card>
  )
}

export default AllianceCard
