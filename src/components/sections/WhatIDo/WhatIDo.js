import React from 'react'
import {Container,Title,Row,Image,Header,Paragraph,ColumnOne,ColumnTwo} from './WhatIDoElements'
import sample from '../../../assets/images/undraw_software_engineer_lvl5.svg'
import {whatIDo} from '../../../data/whatIdoData'

const WhatIDo = ({id}) => {
    return (
       <Container id={id}>
          <Title>
              What I Do
          </Title>
              {
                  whatIDo.map((item,index) => {
                      return (
                        <Row key={index} row={item.reverse}>
                        <ColumnOne>
                            <Image src={item.svg}/>
                        </ColumnOne>
                        <ColumnTwo>
                            <Header>{item.title}</Header>
                                <Paragraph>{item.desc}</Paragraph>
                        </ColumnTwo>
                          </Row>
                      )
                   
                  })
              }
               
  
       </Container>
    )
}

export default WhatIDo
