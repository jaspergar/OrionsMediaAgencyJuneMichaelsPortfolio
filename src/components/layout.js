import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Header from "./Header"
import {GlobalStyle} from '../components/Styles/GlobalStyles'
import Footer from "./Footer"
import Head from "./Head"


const Layout = ({ children }) => {

  return (
    <>
       <GlobalStyle/>
      <Head/>
        <main>{children}</main>
        <Footer/>
    </>
  )
}

export default Layout
