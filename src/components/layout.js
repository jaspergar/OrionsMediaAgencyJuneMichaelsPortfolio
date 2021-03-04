import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import {GlobalStyle} from '../components/Styles/GlobalStyles'
import Footer from "./Footer"

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

  return (
    <>
       <GlobalStyle/>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <Footer/>
    </>
  )
}

export default Layout
