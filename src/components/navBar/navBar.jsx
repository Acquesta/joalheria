
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar(){
    return (
        <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Joalheria</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/sobre">Sobre</Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
    )
}