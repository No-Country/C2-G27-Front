import React from 'react';
import { Container, Button, Row, Col } from 'reactstrap';

export default function AdminCP() {
  return (
    <div>
      <Container className='d-flex align-items-center justify-content-center vw-100 vh-100 '>
        <Row >
          <Col className='d-flex flex-column'>
            <Button className="mb-2">Users Assets</Button>
            <Button className="mb-2">Company Assets</Button>
            <Button className="mb-2">Manage Users</Button>
            <Button className="mb-2">Search User</Button>
            <Button>Create User</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
