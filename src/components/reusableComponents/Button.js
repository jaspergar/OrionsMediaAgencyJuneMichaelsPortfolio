import styled from "styled-components"
import {Link} from "gatsby"

export const primaryColor =  "#F26A2E"
export const secondary = "#3d5af1"


export const Button = styled(Link)`
  background: ${({primary}) => (primary ? primaryColor :secondary  )};
  white-space: nowrap;
  padding: ${({big}) => (big ? "12px 40px" : "10px 32px")};
  color:#fff;
  font-size: ${({big}) => (big ? "20px" : "16px")};
  outline:none;
  border:none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s ease-in !important;
  border-radius: ${({round}) => (round ? "10px" : "none")};
  
  &:hover {
    background: ${({primary}) => (primary ?  secondary:primaryColor)};
    transform: translateY(-3px);
  }

  @media screen and (max-width: 400px){
    width:100%;
    text-align:center;
    transition: .3s ease-in;
  }
`