import React from "react"

import { Container, NavItem } from "./styles"

function Nav() {
  return (
    <Container>
      <NavItem active={true}>HOME</NavItem>
      <NavItem active={false}>ABOUT</NavItem>
      <NavItem active={false}>CONTACTS</NavItem>
    </Container>
  )
}

export default Nav
