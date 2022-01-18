import React from 'react';
<<<<<<< HEAD
import  Landing  from '../Components/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return <div>
    <Landing/>
    </div>;
=======
import { Button, Col, Container, Row } from 'reactstrap';
import Footer from '../Components/Fooder';
import Navigation from '../Components/Navigation';
import SearchBar from '../Components/SearchBar';
import UserStats from '../Components/UserStats';
import WidgetBoard from '../Components/WidgedBoard';

export default function Home() {
  return (
    <div>
      <Container>
        <Row Clas>
          <Col className='sidebar'>
            <Navigation />
          </Col>
          <Col className='userPanel col-8'>
            <Row>
              <Col>
                <SearchBar />
              </Col>
              <Col>
                <Button>Filter</Button>
              </Col>
            </Row>
            <WidgetBoard />
          </Col>
          <Col>
            <UserStats />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
>>>>>>> development
}
