import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/sections/Hero/Hero"
import About from "../components/sections/About/About"
import WhatIDo from "../components/sections/WhatIDo/WhatIDo"
import Contact from "../components/sections/Contact/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero id='home'/>
    <About id='about'/>
    <WhatIDo id='whatido'/>
    <Contact id='contact'/>
  </Layout>
)

export default IndexPage
