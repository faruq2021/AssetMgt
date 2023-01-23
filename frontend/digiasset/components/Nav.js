import Link from 'next/link'
import styled from 'styled-components'
import logo from "../public/digiasset.png"

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #0000FF;
  color: #fff;
`

const NavLogo = styled.img`
  height: 20px;
`
const NavLinksContainer = styled.div` 
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const NavLink = styled.div`
  margin-left: 1rem;
  font-weight: bold;
`

const Nav = () => (
  <NavContainer>
    <Link href="/">
    <NavLogo src={logo} alt="Logo" />
      
    </Link>
    <NavLinksContainer>
      <Link href="/about">
        <NavLink>About</NavLink>
      </Link>
      <Link href="/contact">
        <NavLink>Contact</NavLink>
      </Link>
      <Link href="/auditAsset">
        <NavLink>Audit Assets</NavLink>
      </Link>
    </NavLinksContainer>
  </NavContainer>
)

export default Nav;