import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import UserHero from "../Components/UserHero"

function UserPage() {
  return <Container>
    <Row>
      <Col>
        <UserHero />
      </Col>
    </Row>
  </Container>;
}

export default UserPage;
