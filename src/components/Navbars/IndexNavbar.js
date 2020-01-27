/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  DropdownItem,
  DropdownMenu,
  UncontrolledDropdown,
  UncontrolledCollapse,
  DropdownToggle,
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";



function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            href="/#"
          >
            <h5>One<span style={{color: "red"}}>Aim</span>Solutions</h5>
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>

          <NavItem>
              <NavLink
                href="/#"
              >
               Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="#aboutus"
              >
               About
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="#service"
              >
               Services
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="#team"
              >
               Team
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="#portfolio"
              >
               Portfolio
              </NavLink>
            </NavItem>

            {/* <NavItem>
                  <Nav className="mr-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        caret
                        color="default"
                        data-toggle="dropdown"
                        href="#"
                        id="dropdownMenuButton"
                        nav
                        onClick={e => e.preventDefault()}
                        role="button"
                      >
                        Fetures
                      </DropdownToggle>
                      <DropdownMenu
                        aria-labelledby="dropdownMenuButton"
                        className="dropdown-info"
                      >
                        <DropdownItem header tag="span">
                          Dropdown header
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Something else here
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Separated link
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Another separated link
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
            </NavItem> */}
             <NavItem>
              <NavLink
                href="#project"
              >
               Projects
              </NavLink>
            </NavItem>
        
            <NavItem>
              <NavLink
                href="#contactus"
              >
               Contact
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/oneaimsolutions"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
            
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/oneaimsolutions.oneaimsolutions.1"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
           
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/oneaimsolutions2/?hl=en"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
               
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/in/oneaimsolutions-india-8ba8b9191/"
                title="Star on GitHub"
              >
                <i className="fa fa-linkedin" />
               
              </NavLink>
            </NavItem>
        
            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                href="#pablo"
                target="_blank"
                disabled
              >
                signin
              </Button>
            </NavItem>

          
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
