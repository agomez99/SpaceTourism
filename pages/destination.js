import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';
import NavbarComponent from '../components/NavbarComponent';
import styles from '../styles/Destination.module.css';
import { motion } from 'framer-motion';

const data = require("../public/data.json");

const Destination = () => {
  const [planet, setPlanet] = React.useState(data.destinations[0]);
  const [planetIndex, setPlanetIndex] = React.useState(0);

  const changePlanet = (index) => {
    setPlanet(data.destinations[index]);
    setPlanetIndex(index);
  };

  const planetInfo = (
    <div className={styles.planetInfo}>
      <h1 className={styles.planetName}>{planet.name}</h1>
      <p className={styles.planetDescription}>{planet.description}</p>
      <hr className={styles.hr} />
      <div className={styles.planetDistance}>
        <div className={styles.planetDistanceInfo}>
          <h3 className={styles.distance}>AVG. DISTANCE</h3>
          <p className={styles.distanceNumber}>{planet.distance}</p>
        </div>
        <div className={styles.planetTravelTime}>
          <h3 className={styles.travel}>EST. TRAVEL TIME</h3>
          <p className={styles.travelNumber}>{planet.travel}</p>
        </div>
      </div>
    </div>
  );

  // JSX for planet image section
  const planetImage = (
    <Image src={`/${planet.images.png}`} width={500} height={500} alt="planet" className={styles.planetImage} />
  );

  // JSX for planet navigation section
  const planetNavigation = (
    <div className={styles.planetNavigation}>
      {data.destinations.map(({ name }, index) => (
        <button
          key={index}
          id={styles.planetNavigationItem}
          className={index === planetIndex ? styles.active : ""  }
          onClick={() => changePlanet(index)}

        >
          {name}
        </button>
      ))}
    </div>
  );

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div>
      <div className={styles.container}>
        <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
          <title>Frontend Mentor | Space tourism website</title>
        </Head>
        <Container fluid>
          <NavbarComponent />
          <Row>
            <Col md={6}>
            <h1 className={styles.title}>
                  <span className={styles.title1}>01</span>Pick Your Destination
                </h1>
                <div className={styles.planet}>
                  {planetImage}
                </div>
            </Col>
            <Col md={6}>
            <div className={styles.planetDetails}>
              <div>{planetNavigation}</div>
              <div>{planetInfo}</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    </motion.div>

  )
}

export default Destination