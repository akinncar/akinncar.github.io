import styled, { css } from "styled-components"

export const Container = styled.nav`
  display: flex;
  flex: 1;
  align-self: "stretch";
  /* background-color: #773; */
`

export const NavItem = styled.p`
  font-size: 18px;
  color: #333333;

  ${props =>
    !props.active &&
    css`
      opacity: 50%;
    `}

  margin-right: 50px;
  margin-bottom: 45px;
`
