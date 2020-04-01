import React from "react"

import { Container, NavItem } from "./styles"

function Nav() {
  return (
    <Container>
      <a>
        {/* <NavItem active={true}>HOME</NavItem> */}
        <NavItem active={false}></NavItem>
      </a>
      <a>
        {/* <NavItem active={false}>ABOUT</NavItem> */}
        <NavItem active={false}></NavItem>
      </a>
      <a>
        {/* <NavItem active={false}>CONTACTS</NavItem> */}
        <NavItem active={false}></NavItem>
      </a>
    </Container>
  )
}

export default Nav
