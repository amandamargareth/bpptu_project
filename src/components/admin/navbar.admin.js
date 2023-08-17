import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function TextLinkExample() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            BPPT UNGGAS JATIWANGI
          </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Col xs="auto">
            <Button type="submit" variant="danger">LOGOUT</Button>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;