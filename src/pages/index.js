import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/Seo"
import Nav from "../components/Nav"

import GlobalStyle, {
  Container,
  Name,
  Title,
  Text,
  Email,
  ButtonEmail,
  Medias,
  Main,
  Photo,
} from "./styles"

const IndexPage = () => (
  <>
    <GlobalStyle />
    <SEO title="Home" />
    <Container>
      <Medias></Medias>
      <Main>
        <Nav />
        <Name>AKINN ROSA</Name>
        <Title>Mobile Developer</Title>
        <Text>
          In love with React and React Native, <br />
          working with Front-end and Mobile technologies.
        </Text>
        <Email>akinncar@hotmail.com</Email>
        <ButtonEmail>CLICK TO E-MAIL</ButtonEmail>
      </Main>
      <Photo></Photo>
    </Container>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </>
)

export default IndexPage
