import React from "react";
import { Container, Navbar } from "react-bootstrap";
import SvvLogo from "./FireBaseLogo";

interface HeaderProps {
    actions?: React.ReactNode[];
}

const Header: React.FC<HeaderProps> = ({ actions }) => {
    return (
        <Navbar fixed='top' expand='lg' className='app-header'>
            <Container>
                <Navbar.Brand>
                    <SvvLogo width='150px' height='50px' />
                </Navbar.Brand>
                <Navbar.Text color='white'>Registeret</Navbar.Text>
            </Container>
        </Navbar>
    );
};

export default Header;
