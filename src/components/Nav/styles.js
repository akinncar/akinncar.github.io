import styled, { css } from "styled-components"

export const Container = styled.ul`
  display: flex;
  width: 100%;
  margin: 0 auto;
  height: 80px;
  align-items: center;
  padding-left: 110px;
  /* box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2); */

  @media (max-width: 800px) {
    justify-content: center;
    padding-left: 0;
  }
`

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #333333;
  padding: 5px 10px;

  ${props =>
    !props.active &&
    css`
      opacity: 50%;
    `}
`
