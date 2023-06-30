import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/Nabar.module.css'
import Image from 'next/image';
function NavbarComponet() {
  return (
    <Navbar expand="lg" className="bg">
      <Navbar.Brand href="#home" className={styles.brand}>
        <Image src="/assets/shared/logo.svg" width={50} height={50} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={styles.nav}>
          <Nav.Link href="/" className={styles.navLink}> 00 Home</Nav.Link>
          <Nav.Link href="/destination"  className={styles.navLink}>01 Destination</Nav.Link>
          <Nav.Link href="/crew"  className={styles.navLink}>02 Crew</Nav.Link>
          <Nav.Link href="/technology"  className={styles.navLink}>03 Technology</Nav.Link>

        </Nav>
      </Navbar.Collapse>
  </Navbar>
  )
}

export default NavbarComponet