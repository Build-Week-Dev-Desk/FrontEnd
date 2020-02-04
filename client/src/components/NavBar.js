import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,  NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

function NavBar(props) {
    const [ collapsed, setCollapsed ] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    // The login to check if the user is loggedin, and if true display logout button in menu instead of login button.
    return (
        <div>
            <Navbar color="solid" style={{backgroundColor: "#7ED321"}} light>
                <NavbarBrand href="/" className="home"><h2>DevDesk</h2></NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="toggle"/>
                        <Collapse isOpen={!collapsed} navbar>
                            <Nav navbar>
                                {props.loggedIn ? (
                                    <>
                                    <NavItem>
                                        <NavLink href="/dashboard"><h3>Dashboard</h3></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/mytickets"><h3>My Tickets</h3></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/createticket"><h3>Ask For Help</h3></NavLink> 
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/logout" className="logout"><h3>Logout</h3></NavLink>
                                    </NavItem>
                                    </>
                                ) : (
                                    <>
                                    <NavItem>
                                        <NavLink href="/login" className="login"><h3>Login</h3></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/signup" className="signup"><h3>Sign Up</h3></NavLink>
                                    </NavItem>
                                    </>
                                )}                              
                            </Nav>
                        </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;