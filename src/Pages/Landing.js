import React from 'react';
import { Row, Col, Container, Button } from 'reactstrap';

export default function Landing() {
    return <div className='landing-container header'>
        <Container fluid className='p-5 '>
            <Row>
                <Col md={6} xs={12}>
                    
                    <Container className='p-5 '>
                        <h1 className='title'>Welcome to DashBoard</h1>
                        <h2 className='sub-title'>Join a user and become part of the team</h2>
                        <p className='paragraph'>If you are a new user, can you registrer with the next link.</p>
                        <Button className="mt-3 btn-landing" 
                        >
                            Register
                        </Button>
                    </Container>
                </Col>
                <Col md={6} >
                    <Container className='img-container'>
                        <img
                            width={400}
                            height={400}
                            alt="people working"
                            src="https://i.ibb.co/jHms01r/ilustracion.png"
                        />


                    </Container>

                </Col>
            </Row>


        </Container>

    </div>

}


