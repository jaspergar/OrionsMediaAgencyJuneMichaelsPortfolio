import React from 'react'
import  aboutPhoto from '../../../assets/images/undraw_software_engineer_lvl5.svg'
import {Container,Title,Wrapper,Description,Image} from './AboutElement'

const About = ({id}) => {
    return (
         <Container id={id}>
             <Title>
                 About Me
             </Title>
             <Wrapper>
                  <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque vel lectus non convallis. Integer lacus sapien, scelerisque ac pharetra sit amet, pulvinar at dolor. Aliquam nec nulla ut nibh luctus ullamcorper. Aliquam pulvinar ante nec malesuada ultrices. Nullam vel est augue. Donec quis eros nec felis tincidunt pellentesque. Donec sit amet justo ut enim maximus sodales. Nam vitae pretium tortor. Fusce malesuada nisl augue, sed scelerisque tellus condimentum ut. In ac ullamcorper tellus. Suspendisse potenti.
                  </Description>
                
                    <Image src={aboutPhoto}/>
            
             </Wrapper>

         </Container>
    )
}

export default About
