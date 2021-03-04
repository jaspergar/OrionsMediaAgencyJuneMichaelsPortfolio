import styled from 'styled-components'


export const Container = styled.div`
 
 padding: 5rem calc((100vw - 1200px) / 2);
 display:grid;
 grid-template-columns: 2fr  1fr;

 @media screen and (max-width: 768px){
     grid-template-columns: 1fr;
     padding: 2rem calc((100vw - 1200px) / 2);
 }
`

export const ColumnOne = styled.div`
${'' /* background:yellow; */}
display:flex;
flex-direction:column;
justify-content:center;
padding: 0 2rem;
`
export const Headline = styled.div`
 margin-bottom:1.5rem;
 font-weight: 900;
 font-family: 'Poppins-Black', sans-serif;
 font-size: clamp(2rem , 5vw , 50px);
 line-height: 60px;
 letter-spacing:0.05em;
 ${'' /* color: red; */}

 @media screen and (max-width: 768px){
     line-height: 2.5rem;
 }

 span{
     color:var(--primary-color);
     font-family: 'Poppins-Black' , sans-serif;
 }
`
export const Description = styled.div`
 font-weight: 400;
 margin-bottom:1.5rem;
 font-size: clamp(.8 , 5vw , 1rem);
 line-height: 30px;
 letter-spacing: 0.02em;
 width:85%;
 @media screen and (max-width: 768px){
     width: 100%;
 }
`
export const ColumnTwo = styled.div`
padding: 0 2rem;
${'' /* background:red; */}
`
export const ImageContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;

  overflow:hidden;
max-height:515px;
widht:615px;
  
`

export const Image = styled.img`
   width:100%;
 height:100%;
   object-fit:fill;
`

export const ButtonContainer = styled.div`
 overflow:hidden;
 display: flex;
 align-items:center;
height:60px;
margin-bottom:1.5rem;
`