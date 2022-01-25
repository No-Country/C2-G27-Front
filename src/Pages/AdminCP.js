import React from 'react';
import { Container, Button, Row, Col } from 'reactstrap';
import NavBarResponsive from '../Components/NavBarResponsive';
import Footer from '../Components/FooterDash';


export default function AdminCP() {
  return (
    <div  style={{width:'100%'}}>
      <NavBarResponsive />
      <div className='banner-panel'>
         <h2>Welcome to Admin Panel</h2>
      </div>
      <Container className='d-flex align-items-center justify-content-center  vh-100 '>
        <Row >
          <Col className='d-flex flex-column'>
            <Button className="mb-2" color="primary">Users Assets</Button>
            <Button className="mb-2" color="primary">Company Assets</Button>
            <Button className="mb-2" color="primary">Manage Users</Button>
            <Button className="mb-2" color="primary">Search User</Button>
            <Button color="primary">Create User</Button>
          </Col>
        </Row>
      </Container>
      <Footer />

    </div>
  );
}
