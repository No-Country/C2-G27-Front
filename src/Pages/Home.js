/* eslint-disable no-console */
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import Footer from '../Components/FooterDash';
import WidgetsBoard from '../Components/WidgetsBoard';
import SearchBar from '../Components/SearchBar';
import UserCard from '../Components/UserCard';
import NavBarResponsive from '../Components/NavBarResponsive';
import CriptoItem from '../Components/CriptoItem';


export default function Home() {


  
  const location = useLocation();

  console.log(location);
  return (
    <div style={{width:'100%', minHeight:'100vh'}}>
      <NavBarResponsive />
      <Container>
        <Row>
          <Col className='userPanel '>
            <Row className='d-flex fluid justify-content-between mt-2 mb-2 '>
              <Col>
                <SearchBar />
              </Col>
              <Col/>
              <Col>
                <UserCard />
              </Col>
            </Row>
            <Row>
              <CriptoItem/>
              <WidgetsBoard />
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
