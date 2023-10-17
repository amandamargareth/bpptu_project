import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/dkpp_logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.facebook.com/dkpp.jawabarat"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/dkpp_jabar"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

const Address = () => {
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <svg
          width="14"
          height="19"
          viewBox="0 0 14 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 2.49333C8.83334 2.49333 10.3333 3.99333 10.3333 5.82666C10.3333 7.57666 8.58334 10.41 7 12.41C5.41667 10.3267 3.66667 7.57666 3.66667 5.82666C3.66667 3.99333 5.16667 2.49333 7 2.49333ZM7 0.82666C4.25 0.82666 2 3.07666 2 5.82666C2 9.57666 7 14.9933 7 14.9933C7 14.9933 12 9.49333 12 5.82666C12 3.07666 9.75 0.82666 7 0.82666ZM7 4.15999C6.08334 4.15999 5.33334 4.90999 5.33334 5.82666C5.33334 6.74333 6.08334 7.49333 7 7.49333C7.91667 7.49333 8.66667 6.74333 8.66667 5.82666C8.66667 4.90999 7.91667 4.15999 7 4.15999ZM13.6667 14.9933C13.6667 16.8267 10.6667 18.3267 7 18.3267C3.33334 18.3267 0.333336 16.8267 0.333336 14.9933C0.333336 13.91 1.33334 12.9933 2.91667 12.3267L3.41667 13.0767C2.58334 13.4933 2 13.9933 2 14.5767C2 15.7433 4.25 16.66 7 16.66C9.75 16.66 12 15.7433 12 14.5767C12 13.9933 11.4167 13.4933 10.5 13.0767L11 12.3267C12.6667 12.9933 13.6667 13.91 13.6667 14.9933Z"
            fill="#D32F2F"
          />
        </svg>
        <Typography sx={{ ml: "9.33px" }}>Alamat</Typography>
      </Box>
      <Typography sx={{ ml: "23.33px" }}>
        Jl. Raya Loji KM.35. Jatiwangi, Kabupaten Majalengka
      </Typography>
    </div>
  );
};

export default Footer;

