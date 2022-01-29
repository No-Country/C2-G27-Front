import React from 'react';
/* import { Link } from 'react-router-dom'; */
import { Row, Col, Container } from 'reactstrap';
import LoginForm from '../Components/LoginForm';

export default function Landing() {
  return (
    <div className='landing-container header min-vh-100 '>
      <Container fluid className='p-5 d-flex justify-content-center'>
        <Row>
          <Col md={6} xs={12}>
            <Container className='plt-3 pt-3 '>
              <h1 className='title'>Welcome to the Dashboard</h1>
              <h2 className='sub-title'>Real-time analytics.</h2>
              <p className='paragraph'>
                Tailored to the needs of your business.
              </p>
              {/* <Link to='/login'>
                <Button className='mt-3 btn-landing'>Log in</Button>
              </Link> */}

            </Container>
              <Container className='pl-3 d-flex  '>
              <LoginForm />
              </Container>
          </Col>
          <Col md={6}>
            <Container className='img-container'>
              <img
                width={400}
                height={400}
                alt='people working'
                src='https://i.ibb.co/jHms01r/ilustracion.png'
              />
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
