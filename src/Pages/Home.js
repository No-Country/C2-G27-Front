import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Footer from '../Components/Fooder';
import WidgetBoard from '../Components/WidgedBoard';
import SearchBar from '../Components/SearchBar';
import UserCard from '../Components/UserCard';

export default function Home() {
  return (
    <div>
      <Container>
        <Row >

          <Col className='userPanel '>
            <Row className="d-flex fluid justify-content-between mt-2 mb-2 ">
              <Col>
                <SearchBar />
              </Col>
              <Col>
                <UserCard />
              </Col>
            </Row>
            <Row>
              <WidgetBoard />
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
