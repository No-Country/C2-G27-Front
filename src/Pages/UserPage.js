import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import UserHero from "../Components/UserHero"
import Footer from '../Components/FooterDash';

function UserPage() {

  return <div style={{ width: '100%', height: "100%" }}>
    <div className='banner-panel'>
      <h2>Welcome to Assets</h2>
    </div>

    <Container>
      <Row>
        <Col>
          <UserHero />
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
}

export default UserPage;
