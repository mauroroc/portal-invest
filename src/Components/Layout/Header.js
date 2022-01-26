import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header () {
    return (
        <header>
            <Navbar className="cabecalho" expand="md">
                <Container >
                    <Navbar.Brand as={Link} to="/"><span className="cor-branca">Portal de Investimentos</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/carteiras"><span className="cor-branca">Carteiras</span></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header