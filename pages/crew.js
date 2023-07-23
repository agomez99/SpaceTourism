import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';
import NavbarComponent from '../components/NavbarComponent';
import styles from '../styles/Crew.module.css';
import { motion } from 'framer-motion';

const data = require("../public/data.json");

const Crew = () => {
  // States for the selected planet and its index
  const [crewmember, setCrewmember] = React.useState(data.crew[0]);
  const [memberIndex, setMemberIndex] = React.useState(0);



  // Function to change the selected crew memeber
  const changeMember = (index) => {
    setCrewmember(data.crew[index]);
    setMemberIndex(index);
  } 

  // JSX for crew info section
  const memberInfo = (
    <div className={styles.memberInfo}>
          <p className={styles.memberRole}>{crewmember.role}</p>
      <h1 className={styles.memberName}>{crewmember.name}</h1>
      <p className={styles.memberBio}>{crewmember.bio}</p>
    </div>
  )


  

  // JSX for crew member image section
  const memberImage = (
    <Image src={`/${crewmember.images.png}`} width={500} height={500} alt="planet" className={styles.memberImage} />
  );

  // JSX for planet navigation section
  const memberNavigation = (
    <div className={styles.memberNavigation}>
      {data.crew.map((item, index) => {
        return (
          <a
            key={index}
            id={styles.memberNavigationItem}
            className={index === memberIndex ? styles.active : ""}
            onClick={() => changeMember(index)}
          >
          <span >.</span>
          </a>
        );
      })}
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
          <div className={styles.titleContainer}>
              <h1 className={styles.title}><span className={styles.titleSpan}>01</span>Meet your crew</h1>
              </div>
          <Row className={styles.row}>

            <Col md={6}>
              <main className={styles.main}>
              {memberInfo}
              <div className={styles.memberNavigationContainer}>
                {memberNavigation}
                </div>
              </main>

            </Col>
            <Col md={6}>
              <div  className={styles.memberImageContainer}>
              {memberImage}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    </motion.div>
    )
}

export default Crew