import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-primary text-white text-uppercase fixed-bottom p-3"
    >
      Github Search App with Firebase &copy; 2020-2021
    </Container>
  );
};

export default Footer;
