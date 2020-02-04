import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,  NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar(props) {
    const [ collapsed, setCollapsed ] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="solid" style={{backgroundColor: "#7ED321"}} light>
                <NavbarBrand href="/" className="home"><h2>DevDesk</h2></NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="toggle"/>
                        <Collapse isOpen={!collapsed} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/login" className="login"><h3>Login</h3></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/dashboard"><h3>Dashboard</h3></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/mytickets"><h3>My Tickets</h3></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/createticket"><h3>Ask For Help</h3></NavLink> 
                                </NavItem>
                            </Nav>
                        </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;