import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/Navbar.module.css'
import Image from 'next/image';
function NavbarComponet() {
  return (
    <Navbar expand="lg" className={styles.bg}>
      <Navbar.Brand href="/" className={styles.brand}>
        <Image src="/assets/shared/logo.svg" width={50} height={50} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" ><Image src="/assets/shared/icon-hamburger.svg" alt="hamburder" width="24" height="24" /></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={styles.nav}>
          <Nav.Link href="/" className={styles.navLink}>
            <span className={styles.span}>00</span> Home</Nav.Link>
          <Nav.Link href="/destination" className={styles.navLink}>
            <span className={styles.span}>01</span> Destination</Nav.Link>
          <Nav.Link href="/crew" className={styles.navLink}>
            <span className={styles.span}>02</span> Crew</Nav.Link>
          <Nav.Link href="/technology" className={styles.navLink}>
            <span className={styles.span}>03</span> Technology</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponet