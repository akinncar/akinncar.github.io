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
  MediaIcon,
  Main,
  Photo,
  AkinnImage,
  Content,
} from "./styles"

import GithubIcon from "../images/github-brands.svg"
import LinkedinIcon from "../images/linkedin-brands.svg"
import DribbbleIcon from "../images/dribbble-brands.svg"
import InstagramIcon from "../images/instagram-brands.svg"
import Akinn from "../images/akinn.png"

const IndexPage = () => (
  <>
    <GlobalStyle />
    <SEO title="Home" />
    <Container>
      <Nav />

      <Content>
        <Medias>
          <li>
            <MediaIcon src={GithubIcon} alt="Github Icon" />
          </li>
          <li>
            <MediaIcon src={LinkedinIcon} alt="Linkedin Icon" />
          </li>
          <li>
            <MediaIcon src={DribbbleIcon} alt="Dribbble Icon" />
          </li>
          <li>
            <MediaIcon src={InstagramIcon} alt="Instagram Icon" />
          </li>
        </Medias>
        <Main>
          <Name>AKINN ROSA</Name>
          <Title>Mobile Developer</Title>
          <Text>
            In love with React and React Native, <br />
            working with Front-end and Mobile technologies.
          </Text>
          <Email>akinncar@hotmail.com</Email>
          <ButtonEmail>CLICK TO E-MAIL</ButtonEmail>
        </Main>
        <Photo>
          <AkinnImage src={Akinn} alt="Akinn Rosa" />
        </Photo>
      </Content>
    </Container>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </>
)

export default IndexPage
