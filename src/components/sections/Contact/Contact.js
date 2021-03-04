import React from 'react'
import { Button } from '../../reusableComponents/Button'
import {MainContainer,Container,Title,ContactForm,FormHeading,Form,FormWrap,ButtonContainer,ContactInfo,Header,Info,Column,TitleH1,InfoP,} from './ContactElements'

import {AiFillMail} from '@react-icons/all-files/ai/AiFillMail'


const Contact = ({id}) => {
    return (
        <MainContainer  id={id}>
             <Title>
                 Let's Talk
             </Title>
        <Container>
             
        <ContactForm>
             <FormHeading>
                  <h3>
                     I'd like to hear from you.
                  </h3>
                  <h1>All fields is mandatory.</h1>
                 
             </FormHeading>
              <Form>
              {/* <Form onSubmit={sendEmail}> */}
              <FormWrap>
                    <label htmlFor="fullname">
                    <span>Full Name</span>
                        <input type="text" placeholder="Full name" id="fullname" name="from_name"/>
                    </label>
               </FormWrap>
               <FormWrap>
                    <label htmlFor="email">
                    <span>Email</span>
                        <input type="email" placeholder="Email" id="email" name="from_email" />
                    </label>
               </FormWrap>
               <FormWrap>
                    <label htmlFor="telephone">
                    <span>Telephone</span>
                        <input type="text" placeholder="Telephone" id="telephone" name="telephone"/>
                    </label>
               </FormWrap>
               <FormWrap>
                    <label htmlFor="subject">
                    <span>Subject</span>
                        <input type="text" placeholder="Subject (Book Title)" id="subject" name="book_title" />
                    </label>
               </FormWrap>
               <FormWrap>
                    <label htmlFor="message">
                         <span>Message</span>
                        <textarea name="message" id="message" defaultValue="Message" ></textarea>
                    </label>
               </FormWrap>
                  
                  <ButtonContainer>

                       <Button
                        as="button" 
                    type="submit" 
                    primary="true" 
                    round="true" 
                    big="true"  
                    css={`
                    height: 48px;
                     @media screen and(max-width: 768px){
                         width:100%;
                         min-width:350px;
                     }
                     @media screen and(max-width: 400px){
                         width:100%;
                         min-width:250px;
                     }
                    
                     `}
                       >Send</Button>
                  </ButtonContainer>
              </Form>
        </ContactForm>

        <ContactInfo>
           <Header>
                <h3>Contact Us</h3>
           </Header>
         
            <Info>
            <Column>
                       <TitleH1>Email us</TitleH1>
                       <InfoP> <span><AiFillMail/></span> info@junemicheals.com</InfoP>
                        <InfoP> <span><AiFillMail/></span> info@orionsmediaagency.com</InfoP>
                        {/* <InfoP> <span>For Submission</span> submissions@orionsmediagency.com</InfoP> */}
                  </Column>
                  <Column>
                       <TitleH1>Orions Media Agency</TitleH1>
                        <InfoP>9601 Wilshire Blvd</InfoP>
                        <InfoP>3rd Fl Beverly Hills</InfoP>
                        <InfoP>CA 90210 USA</InfoP>
                        
                  </Column>
                  <Column>
                       <TitleH1>Business Hours</TitleH1>
                        <InfoP> Mondays to Fridays: 10am – 8pm</InfoP>
                        <InfoP>Saturdays: 12am – 6pm</InfoP>
                        <InfoP>Sundays: Closed</InfoP>
                  </Column>
                
            </Info>
        

        </ContactInfo>

  </Container>
  </MainContainer>
    )
}

export default Contact
