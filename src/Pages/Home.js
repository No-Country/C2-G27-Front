import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import Footer from '../Components/Fooder';
import Navigation from '../Components/Navigation';
import SearchBar from '../Components/SearchBar';
import UserStats from '../Components/UserStats';
import WidgetsBoard from '../Components/WidgetsBoard';

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
            <WidgetsBoard />
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
}
