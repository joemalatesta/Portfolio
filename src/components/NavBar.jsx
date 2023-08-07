import {Container, Navbar as BootstrapNavBar, Nav} from "react-bootstrap"
import {Link} from "react-router-dom"

function NavBar () {
  return (
    <BootstrapNavBar
      id="navbar"
      expand='lg'
      sticky='top'
      bg="dark"
    >
      <Container fluid>
          <Nav>
            <Link to='/' className='navbar-brand'>JOE MALATESTA</Link>
            <Link to='/about' className='nav-link'>ABOUT</Link>
            <Link to='/projects' className='nav-link' >PROJECTS</Link>
            <Link to='/technologies' className='nav-link'>TECHNOLOGIES</Link>
            <Link to='/resume' className='nav-link' >RESUME</Link>
          </Nav>
      </Container>
    </BootstrapNavBar>
  )
}

export default NavBar