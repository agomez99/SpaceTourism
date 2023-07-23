
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from "../components/NavbarComponent";
import { motion } from 'framer-motion';

const Home = () => {
  const handleExploreClick = () => {
    window.location.href = "/destination";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
    <div className={styles.container}>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
        <title>Frontend Mentor | Space tourism website</title>
      </Head>
      <Container fluid>
        <Nav />
        <Row className={styles.row}>
          <Col md={6} sm={12}>
            <main className={styles.main}>
              <h1 className={styles.title}>
                SO, YOU WANT TO TRAVEL TO 
              </h1>
              <h2 className={styles.subtitle}>SPACE</h2>
              <p className={styles.body}>
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
                Well sit back, and relax because we’ll give you a truly out of this world experience!
              </p>
            </main>
          </Col>
          <Col md={6} sm={12}>
            <div className={styles.exploreContainer}>
              <button className={styles.explore} onClick={handleExploreClick}>
                <p className={styles.exploreText}>EXPLORE</p>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </motion.div>
  );
};

export default Home;
