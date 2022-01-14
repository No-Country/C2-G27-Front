import { Container, Row, Col } from 'reactstrap';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Container className='d-flex vh-100'>
        <Row>
          <Col>sidebar</Col>
          <Col>
            <Row>
              <Col>Search</Col>
              <Col>Userinfo</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
