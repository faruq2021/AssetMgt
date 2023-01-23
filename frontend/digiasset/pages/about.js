import { Flex, Box, Text } from "@chakra-ui/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer"
import styled from 'styled-components'

const AboutContainer = styled.div`
    text-align: center;
`
const Heading = styled.h1`
    font-size: 2rem;
    margin-bottom: 1rem;
`
const Content = styled.p`
    font-size: 1.5rem;
    line-height: 1.5;
    margin-bottom: 1rem;
`

export default function About() {
    return (
        <AboutContainer>
          <Nav />
            <Heading>About</Heading>
            <Content>
                Welcome to our Digital Asset Management app!
                Our app is designed to promote financial transparency, audit and integrity in government institutions by allowing the public to easily track the financial activities of public servants. With our platform, you can access real-time information on financial transactions, budgets, and expenses, providing a clear picture of how public funds are being used.
                Our mission is to empower citizens by providing them with the information they need to hold public servants accountable for their financial decisions. By promoting transparency and accountability, we aim to build trust in government institutions and improve the overall functioning of the public sector.
                Our app is user-friendly, easy to navigate, and provides a wealth of information on public finances. Whether you are a concerned citizen, a researcher, or a member of the media, our app is an invaluable resource for understanding how public funds are being used.
                We are committed to making our app accessible to everyone and are constantly working to improve its functionality and usability. We welcome your feedback and suggestions on how we can make our app even better.
                Thank you for choosing our Digital Asset Management app. We hope you find it useful in your efforts to promote financial transparency and integrity in government institutions.
            </Content>
            <Footer />
        </AboutContainer>
    )
}