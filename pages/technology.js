import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';
import NavbarComponent from '../components/NavbarComponent';
import styles from '../styles/Technology.module.css';
import { motion } from 'framer-motion';

const data = require("../public/data.json");

const Technology = () => {
    const [technology, setTechnology] = useState(data.technology[0]);
    const [techIndex, setTechIndex] = useState(0);

    const setDefaults = () => {
        setTechnology(data.technology[0]);
        setTechIndex(0);
    }

    const changeTechnology = (index) => {
        setTechnology(data.technology[index]);
        setTechIndex(index);
    };

    const technologyInfo = (
        <div className={styles.technologyInfo}>
            <p className={styles.technologyHeader}>THE TERMINOLOGY...</p>
            <p className={styles.technologyName}>{technology.name}</p>
            <p className={styles.technologyDescription}>{technology.description}</p>
        </div>
    );

    const technologyImageDesktop = (
        <Image src={`/${technology.images.portrait}`} width={500} height={500} alt="technology" className={styles.technologyImage}  priority/>
    );

    const technologyImageMobile = (
        <Image src={`/${technology.images.landscape}`} width={500} height={500} alt="technology" className={styles.technologyImageMobile} />
    );


    const technologyNavigation = (
        <div className={styles.technologyNavigation}>
            {data.technology.map((item, index) => (
                <Button
                    key={index}
                    id={styles.navigationButton}
                    className={index === techIndex ? styles.active : styles.inactive}
                    onClick={() => changeTechnology(index)}


                >
                    <p className={styles.navigationText}>{index + 1}</p>
                </Button>
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
                        <p className={styles.technologyTitle}>
                            <span className={styles.titleSpan}>03</span>SPACE TECHNOLOGY</p>
                        <div className={styles.technologyContainer}>
                            <Col lg={6} sm={12}>
                                <main className={styles.main}>
                                    <div className={styles.technologyNavigation}>
                                        {technologyNavigation}
                                    </div>
                                    <div className={styles.technologyInfo}>
                                        {technologyInfo}
                                    </div>
                                </main>
                            </Col>
                            <Col lg={6} sm={12}>
                                <div className='d-flex'>
                                    {technologyImageDesktop}
                                    {technologyImageMobile}
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
        </motion.div>
    );
}

export default Technology;
