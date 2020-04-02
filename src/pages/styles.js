import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    font-family: "Roboto", sans-serif;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smothing: antialiased !important;
    background: #fff;
    font-family: "Roboto", sans-serif;
  }
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: 100vh;

  @media (max-width: 800px) {
    min-height: auto;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0 0 0;
  flex-wrap: wrap;
  min-height: calc(100vh - 80px);

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const Medias = styled.ul`
  display: flex;
  width: 120px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -80px;

  li {
    margin-top: 5px;
  }

  @media (max-width: 800px) {
    justify-content: center;
    width: 100%;
    flex-direction: row;
    margin-top: 0;
  }
`

export const MediaIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 15px 15px;
`

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 600px;
  align-items: flex-start;
  justify-content: center;
  margin-top: -80px;

  @media (max-width: 1170px) {
    margin-top: 0px;
  }

  @media (max-width: 800px) {
    padding-left: 40px;
  }

  @media (max-width: 560px) {
    flex: 1 1 400px;
  }
`

export const Name = styled.h1`
  color: #0051cb;
  font-weight: "bold";
  letter-spacing: 12px;
  font-size: 22px;
  margin-bottom: 45px;
`

export const Title = styled.h2`
  color: #333333;
  font-weight: 100;
  font-size: 68px;
  margin-bottom: 45px;

  @media (max-width: 560px) {
    font-size: 40px;
  }
`

export const Text = styled.p`
  color: #333333;
  font-weight: 100;
  font-size: 24px;
  margin-bottom: 45px;

  @media (max-width: 560px) {
    font-size: 16px;
  }
`

export const Email = styled.a`
  color: #ff006b;
  font-size: 22px;
  margin-bottom: 8px;
`
export const ButtonEmail = styled.a`
  color: #333333;
  opacity: 50%;
  font-size: 14px;
  margin-bottom: 45px;
`

export const Technologies = styled.div`
  align-items: center;
  min-width: 400px;
`

export const TechnologyIcon = styled.img`
  margin-right: 16px;
  object-fit: contain;
  width: 42px;
`

export const PhotoContainer = styled.section`
  display: flex;
  flex: 1 1 450px;
  align-items: flex-end;

  @media (max-width: 800px) {
    flex: 1;
    max-width: 100%;
  }
`

export const AkinnImage = styled.img`
  object-fit: contain;
  flex: 1;
  width: 100%;
  max-height: 85%;

  @media (max-width: 800px) {
    margin-top: 24px;
    max-width: 100%;
    width: auto;
    height: auto;
  }
`

export default GlobalStyle
