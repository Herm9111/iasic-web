import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import AllianceCard from "./alliance-card"

const alliances = [
  {
    name: "Alestra",
    img: "https://www.abpm.com/content_images/LOGO%20ALESTRA%20NUEVO.png",
    link: "https://www.alestra.mx/",
  },
  {
    name: "Any Desk",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/AnyDesk-logo.svg/1280px-AnyDesk-logo.svg.png",
    link: "https://anydesk.com/",
    double: true,
  },
  {
    name: "APC by Schneider Electric",
    img: "https://www.logolynx.com/images/logolynx/60/6092eacd93e93cbc61f39f0a8dc41b37.png",
    link: "https://www.apc.com/",
  },
  {
    name: "Chicago Digital Power",
    img: "https://www.cdpenergy.com/wp-content/uploads/2020/09/logo-cdp-energy.png",
    link: "https://www.cdpenergy.com/",
  },
  {
    name: "Checkpoint",
    img: "https://www.checkpoint.com/wp-content/themes/checkpoint-theme-v2/images/check-point-logo.png",
    link: "https://www.checkpoint.com/",
    double: true,
  },
  {
    name: "Engenius",
    img: "https://i0.wp.com/engeniusinc.com/wp-content/uploads/2020/06/PS-2017-color-enGenius-corporate-logo-transparent.png?fit=1400%2C424&ssl=1",
    link: "https://engeniusinc.com/",
  },
  {
    name: "Factorum",
    img: "https://static.wixstatic.com/media/0c5d72_5ea15a21da194d1e8125e35832977689~mv2.png/v1/crop/x_0,y_210,w_3471,h_694/fill/w_136,h_27,al_c,q_85,usm_0.66_1.00_0.01/logo_factorum%20transparente.webp",
    link: "https://www.factorum.com.mx/",
    double: true,
  },
  {
    name: "Fortinet",
    img: "https://s3.amazonaws.com/awsmp-logos/Fortinet_Logo_1200px.png",
    link: "https://www.fortinet.com/",
    double: true,
  },
  {
    name: "Hewlett Packard",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png",
    link: "https://www8.hp.com/",
  },
  {
    name: "Ingram Micro",
    img: "https://my.ingrammicro.com/_layouts/images/CSDefaultSite/common/logo_im.png",
    link: "https://www.ingrammicro.com/",
    double: true,
  },
  {
    name: "Lexmark",
    img: "https://media.lexmark.com/www/lxkfef/themes/lxk/v1.0.12/images/logos/lxk-logo-2x.svg",
    link: "https://www.lexmark.com/",
    double: true,
  },
  {
    name: "LinkSys",
    img: "https://www.linksys.com/medias/linksys-logo-blue.svg?context=bWFzdGVyfGltYWdlc3wxNDQ0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2hlYy9oNzUvODc5NjE1NjcyMzIzMC5zdmd8NzIzNTllNTU5NGM2ZjZiMTIyZGI3NzE5Njg2M2EyYWMwZWE1MmIyZGFmMzdmNzNjMzgyMDFhZTA5N2Y3ZGZkYw",
    link: "https://www.linksys.com/",
    double: true,
  },
  {
    name: "TP Link",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/TPLINK_Logo_2.svg/1200px-TPLINK_Logo_2.svg.png",
    link: "https://www.tp-link.com/",
  },
  {
    name: "Microsoft",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
    link: "https://www.microsoft.com/",
    double: true,
  },
  {
    name: "Tripp Lite",
    img: "https://assets.tripplite.com/core-site-images/logo-tripp-lite-pacyw-stacked-xl.png",
    link: "https://www.tripplite.com/",
    double: true,
  },
  {
    name: "Lenovo",
    img: "https://www.bettshow.com/__media/libraries/bett-suppliers-list/5218B991-5056-B71D-5ECA694512532076-logo1.png",
    link: "https://www.lenovo.com/",
  },
  
]

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "2em",
  },
}))

const Services = ({ img, title, text }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h6" component="p">
        Trabajamos de la mano con los proveedores más experimentados del mercado
        nacional e internacional para ofrecerle los mejores productos y
        servicios para evolucionar y digitalizar su negocio.
      </Typography>
      <br />
      <Grid container spacing={3} justify="center" alignItems="stretch">
        {alliances.map(alliance => (
          <Grid item xs={alliance.double ? 12 : 6} sm={alliance.double ? 6 :3} lg={alliance.double ? 4 :2}>
            <AllianceCard img={alliance.img} link={alliance.link} name={alliance.name}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Services
