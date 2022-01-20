import React from 'react';
import { Container, Button, Row, Col } from 'reactstrap';

export default function AdminCP() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Button>Users Assets</Button>
            <Button>Company Assets</Button>
            <Button>Manage Users</Button>
            <Button>Search User</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
