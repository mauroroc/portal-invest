import { Container, Navbar, Nav } from 'react-bootstrap';

function Header () {
    return (
        <header>
                <Navbar className="cabecalho" expand="md">
                    <Container >
                        <Navbar.Brand href="/"><span className="cor-branca">Portal de Investimentos</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/acoes"><span className="cor-branca">Ações</span></Nav.Link>
                            <Nav.Link href="/bdrs"><span className="cor-branca">BDRs</span></Nav.Link>
                            <Nav.Link href="/fiis"><span className="cor-branca">FIIs</span></Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
    )
}

export default Header