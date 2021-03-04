import React,{useEffect, useState} from "react"
import styled from "styled-components"
import {FaBars} from '@react-icons/all-files/fa/FaBars'
import {FaTimes} from '@react-icons/all-files/fa/FaTimes'
import {AiOutlineClose} from '@react-icons/all-files/ai/AiOutlineClose'
import logoWhite from '../assets/images/mainLogo8PNG.png'
import logoBlack from '../assets/images/mainLogo7PNG.png'
import logoSvg from '../assets/images/mainLogo7.svg'
import {Link as LinkG} from 'gatsby'
import { Link as LinkS} from "react-scroll"
import {animateScroll as scroll} from 'react-scroll'
const Head = () => {
  const [clicked , setClicked] = useState(false);
  const [scrollNav, setScrollNav] = useState(false); 

  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true);
      
    }else{
      setScrollNav(false);
    }
  }

  useEffect (() => {
      window.addEventListener('scroll', changeNav);
  }, [])

  const openNav = (e) =>{
      e.preventDefault()
      setClicked(prevState => !prevState)
  }

  //toggle to hero section
  const toggleHome =() => {
    scroll.scrollToTop();
  }
return (
  <Nav scrollNav={scrollNav}>
      <NavLogo to="/" onClick={toggleHome}>
         {scrollNav ? <Logo src={logoWhite}/>:<Logo src={logoBlack}/> }
           
      </NavLogo>
      <MenuIcon onClick={openNav} navMenu={clicked} scrollNav={scrollNav}>
          { clicked ?  <BarsTimes/> : <Bars />} 
      </MenuIcon>
      <NavMenu  navMenu={clicked}>
            <NavLinks scrollNav={scrollNav} to='home' smooth={true} duration={500} spy={true}  offset={-130}>
                  Home
            </NavLinks>
            <NavLinks scrollNav={scrollNav} to='about' smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                  About
            </NavLinks>
            <NavLinks scrollNav={scrollNav} to='whatido' smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                  What I do
            </NavLinks>
            <NavLinks scrollNav={scrollNav} to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-93}>
                  Let's Talk
            </NavLinks>
      </NavMenu>

  </Nav>
)
}

export default Head

const Nav = styled.div`
background: ${({scrollNav}) => (scrollNav ? '#111' : 'transparent')};
width:100%;
display:flex;
justify-content:space-between;
padding: ${({scrollNav}) => (scrollNav ? '0 calc((100vw - 1200px) / 2)' : '1rem calc((100vw - 1200px) / 2)')};
position:sticky;
top:0;
z-index:5;
transition: 0.3s ease-in-out;
`

const NavLogo = styled(LinkS)`
 display:flex;
  text-decoration:none;
  padding: .5rem 1rem;
  cursor: pointer;
`

const Logo = styled.img`
 height:80px;
 width:180px;
 @media screen and (max-width: 807px){
     width:120px;
     height:60px
 };
`

const MenuIcon = styled.div`
  
  display:none;

  @media screen and (max-width: 768px){
    ${'' /* display: block;
    display:flex;
  align-items:center; */}
  z-index: 11;
     display:block;
     position:fixed;
     ${'' /* position: ${({navMenu}) => (navMenu ? "fixed" :  "absolute")};   */}
     top: 0;
     right: 0;
     transform: ${({scrollNav}) => (scrollNav ? 'translate(-70%,50%)' : 'translate(-70%,90%)')} ;
     transition: .3s;
     font-size: 1.8rem;
     cursor:pointer;
  }
`

const Bars = styled(FaBars)`
 color:var(--primary-color); 
`
const BarsTimes = styled(FaTimes)`
 color:#fff; 
`

const NavMenu = styled.div`
display:flex;
justify-content:center;
align-items:center;


@media screen and (max-width: 768px){
       position:fixed;
       justify-content:center;
       overflow:hidden;
       flex-direction:column;
       width:70%;
       height:100vh;
       top:0;
       right: ${({navMenu}) => (navMenu ? "0" :  "-100%")};
       transition: 0.3s ease-in;
       ${'' /* transform: ${({navMenu}) => (navMenu ? "translateX(0)" :  "translateX(100%)")};     */}
       background: var(--primary-color);
       z-index:10;
       margin-right:0;
   }
`

const NavLinks = styled(LinkS)`
font-weight:400;
color: ${({scrollNav}) => (scrollNav ? 'white' : '#111')};
  display:flex;
  align-items:center;
  text-decoration:none;
  padding: 0 1rem;
  height : 80px;
  transition: 0.1s ease-in-out !important;
  
  cursor: pointer;
   ${'' /* background:pink; */}
   
  &:hover{
    color: var(--secondary-color);
  }

  &.active {
    border-bottom: 3px solid var(--secondary-color)
  }
   @media screen and (max-width: 768px){
      color: #111;
      justify-content:center;
      width:100%;
      cursor:pointer;
    &:hover{
      color: #fff;
      ${'' /* background: var(--secondary-color); */}
      font-size: 1.5rem;
      transform: translateY(-1px);
      
   }
   
`


