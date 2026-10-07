import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  return (
    <Navbar className="whatsapp-navbar">
      <Container fluid>
        <Navbar.Brand className="whatsapp-brand">
          💬 WhatsApp
        </Navbar.Brand>

        <div className="navbar-user">
          <div className="my-avatar">
            RN
          </div>

          <span>Rihem</span>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;