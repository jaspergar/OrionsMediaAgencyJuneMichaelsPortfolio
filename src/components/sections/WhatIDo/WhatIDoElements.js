import styled from 'styled-components'

export const Container = styled.div`
 display:flex;
 flex-direction:column;
 padding: 5rem calc((100vw - 1200px) / 2);
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
export const Row = styled.div`
${'' /* padding: 2rem 5rem; */}
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction: ${({row}) => (row ? "row-reverse" :  "row")};
   ${'' /* background:orange; */}
   margin-bottom:5rem;
  @media screen and (max-width: 768px){
    flex-direction:column-reverse;
  }
`
export const ColumnOne = styled.div`
 ${'' /* background:green; */}
 ${'' /* width:30%; */}
 display:flex;
 justify-content:center;
 padding: 0 2rem;
 
 @media screen and (max-width: 768px){
    padding: 2rem 2rem;
  }
`
export const Image = styled.img`
 height:100%;
  width:100%;
  padding: 0 1rem;
  ${'' /* border-radius:50%; */}
  -o-object-fit: cover;
  object-fit: cover ;
  `
export const ColumnTwo = styled.div`
height:max-content;
 padding: 0 3rem;
 @media screen and (max-width: 768px){
     padding:0 2rem;
 }
`
export const Header = styled.h4`
margin-bottom:1rem;
 font-size: clamp(1rem , 5vw , 1.2rem);
 letter-spacing:1px;
 font-weight: 700;
`
export const Paragraph = styled.p`
 font-size: clamp(.8rem , 5vw , 1rem);
 font-weight:500;
 letter-spacing:1px;
 line-height:30px;
`
