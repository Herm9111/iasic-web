  
  
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './footer';
import { useStaticQuery, graphql } from "gatsby"
import Header from './header';
import PropTypes from "prop-types"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <main>{children}</main>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
