import React from 'react'
import styled from 'styled-components'
import {Container,ColumnOne,ColumnTwo,Headline,Description,ImageContainer,Image,ButtonContainer} from './HeroElements'
import june from '../../../assets/images/june.jpg'
import { Button } from '../../reusableComponents/Button'
const Hero = ({id}) => {
    return (
        <Container id={id}>
             <ColumnOne>
                  <Headline>   
                  Hi I'm <span>June Michaels.
                  </span> An agent of <span>Orions
                  Media Agency.</span>
                  </Headline>
                  <Description>
                  I’ll be the one to help you succeed here in Orions 
                  Media Agency. Together,  Let’s make it happen.
                  </Description>
                  <ButtonContainer>
                   <Button primary={true} big={true} round={true}>
                        Let's Talk
                   </Button>
                   </ButtonContainer>
             </ColumnOne>
             <ColumnTwo>
                 <ImageContainer>
                    <Image src={june}/>
                 </ImageContainer>
             </ColumnTwo>
        </Container>
    )
}

export default Hero

