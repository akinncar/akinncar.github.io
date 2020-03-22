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
  Technologies,
  TechnologyIcon,
  PhotoContainer,
  AkinnImage,
  Content,
} from "./styles"

import GithubIcon from "../images/github-brands.svg"
import LinkedinIcon from "../images/linkedin-brands.svg"
import DribbbleIcon from "../images/dribbble-brands.svg"
import InstagramIcon from "../images/instagram-brands.svg"
import ReactIcon from "../images/react-brands.svg"
import AppleIcon from "../images/apple-brands.svg"
import AndroidIcon from "../images/android-brands.svg"
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
            <a
              href="https://github.com/akinncar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={GithubIcon} alt="Github Icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/akinn-costa-de-aguiar-rosa-a56861163/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={LinkedinIcon} alt="Linkedin Icon" />
            </a>
          </li>
          <li>
            <a
              href="https://dribbble.com/akinncar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={DribbbleIcon} alt="Dribbble Icon" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/akinncar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={InstagramIcon} alt="Instagram Icon" />
            </a>
          </li>
        </Medias>
        <Main>
          <Name>AKINN ROSA</Name>
          <Title>Mobile Developer</Title>
          <Text>
            In love with React and React Native, <br />
            working with Front-end and Mobile technologies.
          </Text>
          <Email href="mailto:akinncar@hotmail.com">akinncar@hotmail.com</Email>
          <ButtonEmail href="mailto:akinncar@hotmail.com">
            CLICK TO E-MAIL
          </ButtonEmail>
          <Technologies>
            <TechnologyIcon src={ReactIcon} alt="React Icon" />
            <TechnologyIcon src={AppleIcon} alt="Apple Icon" />
            <TechnologyIcon src={AndroidIcon} alt="Android Icon" />
          </Technologies>
        </Main>
        <PhotoContainer>
          <AkinnImage src={Akinn} alt="Akinn Rosa" />
        </PhotoContainer>
      </Content>
    </Container>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </>
)

export default IndexPage
