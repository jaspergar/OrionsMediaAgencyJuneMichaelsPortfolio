import React from 'react'
import logo from '../assets/images/mainLogo7PNG.png'
import styled from 'styled-components'
import { Link } from "gatsby"
import {animateScroll as scroll} from 'react-scroll'
import { Link as LinkS} from "react-scroll"
const Footer = () => {
  const toggleHome =() => {
    scroll.scrollToTop();
  }
    return (
        <MainContainer>
       <Container>
           <ColumnOne>
           <FooterLogo onClick={toggleHome}>
                  <Image src={logo}/>
                  <Slogan>
                  Representing the best in cutting edge literary fiction and non-fiction.
                  </Slogan>
                  </FooterLogo>
           </ColumnOne>
           <ColumnTwo>
                 <Column>
                     <Title>Navigation</Title>
                    <ItemLink>About me</ItemLink>
                    <ItemLink>What I do</ItemLink>
                    <ItemLink>Let's talk</ItemLink>
                 </Column>
                 <Column>
                     <Title>Contact</Title>
                    <ItemLink>www.orionsmediaagency.com</ItemLink>
                    <ItemLink>info@orionsmediaagency.com</ItemLink>
                    <ItemLink>info@junemichaels.com</ItemLink>
                 </Column>
           </ColumnTwo>
           
       </Container>
       <FooterCopyRight>
            <p><span>&#169;</span> Copyright 2021 by Orions Media Agency. All Rights Reserved</p>
            </FooterCopyRight>
       </MainContainer>
    )
}

export default Footer

const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
  background: #fafafa;
`

const Container = styled.div`
 display:flex;
 padding: 5rem calc((100vw - 1200px) / 2);
 ${'' /* background:red; */}

 @media screen and (max-width: 768px){
    flex-direction:column-reverse;
    align-items:center;
    justify-content:center;
 }
`
const ColumnOne =styled.div`
diplay:flex;
flex-direction:column;
padding:0 2rem;
width:60%;

`
const FooterLogo =styled(LinkS)`
 display:flex;
 flex-direction:column;
  text-decoration:none;
  ${'' /* padding: 0 1rem; */}
  cursor: pointer;
`

const Image = styled.img`
  height:60%;
  width:100%;
  margin-bottom: .5rem;
  padding:.5rem;
`
const Slogan = styled.p`
   font-size: clamp(.7rem , 3vw , 1rem);
     line-height:1.5;
     font-style:italic;
     font-weight:600;
     text-align:center;
`
const ColumnTwo = styled.div`
  display:flex;
  justify-content:space-around;
 align-items:center;
 width:100%;
 @media screen and (max-width: 768px){
     flex-direction:column;
     justify-content:center;
     text-align:center;
 }

`
const Column = styled.div`
 display:flex;
 flex-direction:column;
 margin-bottom:2rem;
`
const Title =styled.h3`
 margin-bottom:2rem;
 font-size: clamp(.9rem , 3vw , 1.2rem);
`
const ItemLink = styled(Link)`
 margin-bottom: 1rem;
 font-size: clamp(.7rem , 3vw , 1rem);
 color: #3d3d4e;

 $:hover {
     color: #f26a2e;
     transition: 0.3s ease-out;
 }
`

const FooterCopyRight = styled.div`
 ${'' /* background: #fafafa; */}
 padding : 5rem calc((100vw - 1200px) /2 );
display:flex;
flex-direction: column;
font-size: clamp(.5rem , 1vw , 1rem);
color: grey;
width:80%;
margin-left:auto;
margin-right:auto;
border-top: 1px solid lightgrey;
text-align:center;
@media screen and (max-width:400px) {
     padding: 1rem;
 }
`