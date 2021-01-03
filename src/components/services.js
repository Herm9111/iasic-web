import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import ServiceCard from "./service-card"

const CONECTIVIDAD_TITLE = "Conectividad"
const CONECTIVIDAD_TEXT =
  "Soluciones de conectividad para su negocio, planta u oficina. Desde redes privadas e impresoras LAN hasta redes amplias virtuales multisitio WAN."
const CONECTIVIDAD_IMG = "/images/conectividad.jpg"

const COMUNICACION_TITLE = "Comunicaciones"
const COMUNICACION_TEXT =
  "Habilite videollamadas y videoconferencias con sus clientes y colaboradores así como todas las herramientas necesarias para digitalizar su negocio y posibilitar el trabajo remoto"
const COMUNICACION_IMG = "/images/comunicacion.jpg"

const FACTURACION_TITLE = "Soluciones digitales y Facturacion Electrónica"
const FACTURACION_TEXT =
  "Integraión de soluciones digitales para automatización de facturaciones y facturación electrónica"
const FACTURACION_IMG = "/images/facturacion.jpg"

const SEGURIDAD_TITLE = "Seguridad Perimetral y protección de datos"
const SEGURIDAD_TEXT =
  "Seguridad física y digital de su negocio. Desde firewalls y detección de intrusos hasta circuito cerrado de cámaras y video vigilancia"
const SEGURIDAD_IMG = "/images/security.jpg"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))

const Services = ({ img, title, text }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center" alignItems="stretch">
        <Grid item xs={12} sm={6} lg={3}>
          <ServiceCard
            img={CONECTIVIDAD_IMG}
            text={CONECTIVIDAD_TEXT}
            textTitle={CONECTIVIDAD_TITLE}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <ServiceCard
            img={COMUNICACION_IMG}
            text={COMUNICACION_TEXT}
            textTitle={COMUNICACION_TITLE}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <ServiceCard
            img={FACTURACION_IMG}
            text={FACTURACION_TEXT}
            textTitle={FACTURACION_TITLE}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <ServiceCard
            img={SEGURIDAD_IMG}
            text={SEGURIDAD_TEXT}
            textTitle={SEGURIDAD_TITLE}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Services
