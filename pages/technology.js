import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';
import NavbarComponent from '../components/NavbarComponent';
import styles from '../styles/Technology.module.css';
const data = require("../public/data.json");

const Technology = () => {
    // States for the selected tech and its index
    const [technology, setTechnology] = React.useState(data.technology[0]);
    const [techIndex, setTechIndex] = React.useState(0);

    // Function to change the selected planet
    const changeTechnology = (index) => {
        setTechnology(data.technology[index]);
        setTechIndex(index);
    };

    // JSX for technology info section
    const technologyInfo = (
        <div className={styles.technologyInfo}>
            <h1>{technology.name}</h1>
            <p>{technology.description}</p>
        </div>
    )



    // JSX for technology image section
    const technologyImage = (
        <Image src={`/${technology.images.portrait}`} width={500} height={500} alt="planet" />
    );

    // JSX for planet navigation section
    const planetNavigation = (
        <div className={styles.technologyNavigation}>
            {data.technology.map((item, index) => {
                return (
                    <a
                        key={index}
                        id={styles.technologyNavigationItem}
                        className={index === techIndex ? styles.active : ""}
                        onClick={() => changeTechnology(index)}
                    >
                        {item.name}
                    </a>
                );
            })}
        </div>
    );

    return (
        <div>
            <div className={styles.container}>
                <Head>
                    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
                    <title>Frontend Mentor | Space tourism website</title>
                </Head>
                <Container>
                    <NavbarComponent />
                    <Row>
                        <Col md={6}>
                            <main className={styles.main}>
                                <div>
                                    {planetNavigation}
                                    <p>The terminology...</p>
                                    {technologyInfo}

                                </div>
                            </main>
                        </Col>
                        <Col md={6}>
                            {technologyImage}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default Technology