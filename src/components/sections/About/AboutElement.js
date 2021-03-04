import styled from 'styled-components'

export const Container = styled.div`
 display:flex;
 flex-direction:column;
 padding: 5rem calc((100vw - 1200px) /2);
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
export const Wrapper =styled.div`
  display:flex;
  flex-direction: row-reverse;
  align-items:center;
  justify-content:center;

  @media screen and (max-width: 768px){
     flex-direction:column;
  }
`
export const Description = styled.p`
display:flex; 
padding: 0 2rem;
align-items:center;
   width: 100%;
   font-size:clamp(.8rem , 5vw , 1rem);
   font-weight:400;
   color:#111;
   line-height:30px;
   letter-spacing:0.05em;
    ${'' /* margin-bottom:2rem; */}
`

export const Image = styled.img`

  width:50%;
  padding: 0 2rem;
  padding-top:2rem;
  -o-object-fit: cover;
  object-fit: cover ;
  overflow:visible;
 @media screen and (max-width: 768px){
     width:100%;
 }

`

