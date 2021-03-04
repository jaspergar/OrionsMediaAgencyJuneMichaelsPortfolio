import styled from 'styled-components'

export const MainContainer =styled.div`
display:flex;
flex-direction:column;
padding: 5rem calc((100vw - 1200px) / 2);
background: #fcfcfc;
`

export const Title = styled.h1`
  display:flex; 
  justify-content:center;
  align-items:center;
  margin-bottom: 5rem;
  font-size: clamp(2rem , 5vw , 3rem);
  font-family: 'Poppins-Black' ,sans-serif ;
  font-weight: 900;
  color: var(--primary-color);
`

export const Container = styled.div`
  
   
    ${'' /* margin-bottom:2rem; */}
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap:2rem;
    
    @media screen and (max-width: 768px){
         grid-template-columns:1fr;
    }
`
export const ContactInfo = styled.div`
 z-index: 3;
 height:max-content;
 padding:0 2rem;
 ${'' /* margin-top:5rem;

 @media screen and (max-width: 768px){
     margin-top:-5rem;
 } */}
`
export const Header = styled.div`
 padding: 2rem 0;
 margin-bottom:2rem;
 border-bottom: 1px solid lightgrey;
  h3{
    font-size: clamp(1.2rem, 3vw, 2rem);
       
       font-weight:900;
  }
`
export const Info = styled.div`
 display:flex;
 flex-direction:column;
 gap:2rem;
`
export const Column = styled.div`
  display:flex;
  flex-direction:column;
  
`
export const TitleH1 = styled.div`
   font-size: clamp(1rem, 5vw, 1.8rem);
   margin-bottom:1rem;
   font-weight:800;
`
export const InfoP = styled.div`
display:flex;
gap:.3rem;
  font-size: clamp(.7rem , 5vw , 1rem);
  margin-bottom:.5rem;
`
export const ContactForm = styled.div`
z-index: 3;
 display:flex;
 flex-direction:column;
 height:max-content;
 padding:0 2rem;
 ${'' /* margin-top:5rem; */}
`
export const FormHeading = styled.div`
 padding: 2rem 0;
 margin-bottom:2rem;
 border-bottom: 1px solid lightgrey;
  h3{
       font-size: clamp(.6rem, 5vw, .9rem);
       margin-bottom: 2px;
       color:var(--primary-color);
  }
  h1{
     font-size: clamp(1.2rem, 3vw, 2rem);
       font-weight:900;
       
  }
`
export const Paragraph = styled.p`
  font-size: clamp(.7rem , 5vw , 1rem);
  font-weight:500;
  line-height: 2;
  margin-bottom:2rem;
`
export const Form = styled.form`
 display:flex; 
 flex-direction:column;
 gap:.5rem;
`
export const FormWrap = styled.div`
display:flex;
flex-direction:column;
margin-bottom:1rem;
 input{
     padding : 1rem 1.5rem;
     outline: none;
     width: 100%;
     border-radius:10px;
     border-color:lightgrey;
     resize: none;
     border-width: thin;
     ${'' /* border:none; */}
     ${'' /* margin-right: 1rem; */}
     
 }

  span{
      font-weight:700;
      padding:0 .5rem;
  }

 @media screen and (max-width: 768px){
     display:flex;
     flex-direction: column;
     padding: 0 1rem;

      input{
          margin-bottom: 1rem;
          width: 100%;
          margin-right:0;
      }
 }

 textarea{
     width:100%;
     padding : 1rem 1.5rem;
       resize: none;
       font-size: 18px;
       font-weight: 300;
       color: grey;
       ${'' /* border:none; */}
       border-bottom: 1px solid #777;
       outline:none;
       border-radius:10px;
       min-height: 120px;
       border-color:lightgrey;
       margin-bottom:.5rem;
 }
`
export const ButtonContainer = styled.div`
    overflow:hidden;
 display: flex;
 align-items:center;
 height:60px;
 margin-bottom:2rem;
 @media screen and (max-width: 768px){
                            align-items:center;
                            justify-content:center;
                            text-align:center;
                         }
`