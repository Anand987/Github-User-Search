import { useContext, useState } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="primary" dark expand="md">
      <Container>
        <NavbarBrand>
          <Link to="/" className="text-white text-decoration-none">
            GitFire App
          </Link>
        </NavbarBrand>
        <NavbarText className="text-white">
          {context.user?.email ? context.user.email : ""}
        </NavbarText>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {context.user ? (
              <NavItem>
                <NavLink
                  onClick={() => {
                    context.setUser(null);
                  }}
                >
                  Signout
                </NavLink>
              </NavItem>
            ) : (
              <>
                <NavItem>
                  <NavLink tag={Link} to="signin">
                    Signin
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="signup">
                    Signup
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
