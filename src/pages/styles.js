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

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smothing: antialiased !important;
    background: #fff;
    font-family: "Roboto", sans-serif;
  }
`

export const Container = styled.div`
  display: flex;
  flex: 1;
  margin-top: 60px;
  /* background-color: #000; */
`

export const Medias = styled.section`
  background-color: "red";
`

export const Main = styled.section`
  background-color: "red";
`

export const Photo = styled.section`
  background-color: "red";
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
`

export const Text = styled.p`
  color: #333333;
  font-weight: 100;
  font-size: 24px;
  margin-bottom: 45px;
`

export const Email = styled.p`
  color: #ff006b;
  font-size: 22px;
  margin-bottom: 8px;
`
export const ButtonEmail = styled.p`
  color: #333333;
  opacity: 50%;
  font-size: 14px;
  margin-bottom: 45px;
`

export default GlobalStyle
