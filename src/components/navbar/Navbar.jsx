import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import React from 'react';
import img1 from './logo1.svg';
import './navbar.css'

export default function () {
    return (
        <>
            <Navbar bg="light" expand="lg" >
                <Container>
                    <Navbar.Brand href="/home">
                        <img alt="Wallpapersz" src={img1} width="60" height="60" className="d-inline-block align-top" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <Link className="mr-5 hover:text-gray-900" to="/home">Home</Link>
                            <Link className="mr-5 hover:text-gray-900" to="/about">About</Link>
                            <Link className="mr-5 hover:text-gray-900" to="/wallpapers">Wallpapers</Link>
                            <Link className="mr-5 hover:text-gray-900" to="/contact">ConatctUs</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
