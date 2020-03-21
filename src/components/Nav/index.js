import React from "react"

import { Container, NavItem } from "./styles"

function Nav() {
  return (
    <Container>
      <a href="">
        <NavItem active={true}>HOME</NavItem>
      </a>
      <a href="">
        <NavItem active={false}>ABOUT</NavItem>
      </a>
      <a href="">
        <NavItem active={false}>CONTACTS</NavItem>
      </a>
    </Container>
  )
}

export default Nav
