import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Footer from '../Components/Fooder';
import WidgetsBoard from '../Components/WidgetsBoard';
import SearchBar from '../Components/SearchBar';
import UserCard from '../Components/UserCard';
import NavBarResponsive from '../Components/NavBarResponsive';

export default function Home() {
  return (
    <div>
      <NavBarResponsive/>
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
              <WidgetsBoard />
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
