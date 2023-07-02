import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';
import NavbarComponent from '../components/NavbarComponent';
import styles from '../styles/Technology.module.css';

const data = require("/data.json");

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
            <p className={styles.technologyName}>{technology.name}</p>
            <p className={styles.technologyDescription}>{technology.description}</p>
        </div>
    )



    // JSX for technology image section
    const technologyImageDesktop = (
        <Image src={`/${technology.images.portrait}`} width={500} height={500} alt="technology" className={styles.technologyImage} />
    );

    const technologyImageMobile = (
        <Image src={`/${technology.images.landscape}`} width={500} height={500} alt="technology" className={styles.technologyImageMobile} />
    );

    // JSX for planet navigation section
    const technologyNavigation = (
        <div className={styles.technologyNavigation}>
            {data.technology.map((item, index) => {
                return (
                    <Button
                        key={index}
                        id={styles.navigationButton}
                        className={index === techIndex ? styles.active : null}
                        onClick={() => changeTechnology(index)}
                    >
                        <p className={styles.navigationText}>{index + 1}</p>
                    </Button>
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
                        <p className={styles.technologyTitle}>
                            <span className={styles.titleSpan}>03</span>SPACE TECHNOLOGY</p>
                        <div className={styles.technologyContainer}>
                            <Col lg={6} sm={12}>
                                <main className={styles.main}>
                                    <div className={styles.technologyNavigation}>
                                        {technologyNavigation}
                                    </div>
                                    <div className={styles.technologyInfo}>
                                        <p className={styles.technologyHeader}>THE TERMINOLOGY...</p>
                                        {technologyInfo}

                                    </div>
                                </main>
                            </Col>
                            <Col lg={6} sm={12}>
                                <div>
                                    {technologyImageDesktop}
                                    {technologyImageMobile}
                                </div>
                            
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default Technology