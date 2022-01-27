/* eslint-disable no-console */
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import Footer from '../Components/FooterDash';
import WidgetsBoard from '../Components/WidgetsBoard';
import SearchBar from '../Components/SearchBar';
import UserCard from '../Components/UserCard';
import NavBarResponsive from '../Components/NavBarResponsive';

export default function Home() {
  const location = useLocation();
  const homeDefaults = {
    
      lg:[
        { i: "1", w: 5, h: 8, x: 0, y: 0, minW: 2, minH: 6 },
        { i: "2", w: 3, h: 8, x: 5, y: 0, minW: 2, minH: 6 },
        { i: "3", w: 4, h: 8, x: 8, y: 1, minW: 2, minH: 6 },
        { i: "4", w: 5, h: 8, x: 3, y: 1, minW: 2, minH: 6 },
      ],
      md:[
        { i: "1", w: 5, h: 8, x: 0, y: 0, minW: 2, minH: 6 },
        { i: "2", w: 3, h: 8, x: 5, y: 0, minW: 2, minH: 6 },
        { i: "3", w: 4, h: 8, x: 8, y: 1, minW: 2, minH: 6 },
        { i: "4", w: 5, h: 8, x: 3, y: 1, minW: 2, minH: 6 },
      ],
      sm:[
        { i: "1", w: 5, h: 8, x: 0, y: 0, minW: 2, minH: 6 },
        { i: "2", w: 3, h: 8, x: 5, y: 0, minW: 2, minH: 6 },
        { i: "3", w: 4, h: 8, x: 8, y: 1, minW: 2, minH: 6 },
        { i: "4", w: 5, h: 8, x: 3, y: 1, minW: 2, minH: 6 },
      ],
      xs:[
        { i: "1", w: 5, h: 8, x: 0, y: 0, minW: 2, minH: 6 },
        { i: "2", w: 3, h: 8, x: 5, y: 0, minW: 2, minH: 6 },
        { i: "3", w: 4, h: 8, x: 8, y: 1, minW: 2, minH: 6 },
        { i: "4", w: 5, h: 8, x: 3, y: 1, minW: 2, minH: 6 },
      ],
      xxs:[
        { i: "1", w: 5, h: 8, x: 0, y: 0, minW: 2, minH: 6 },
        { i: "2", w: 3, h: 8, x: 5, y: 0, minW: 2, minH: 6 },
        { i: "3", w: 4, h: 8, x: 8, y: 1, minW: 2, minH: 6 },
        { i: "4", w: 5, h: 8, x: 3, y: 1, minW: 2, minH: 6 },
      ]
    
  };

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
              <WidgetsBoard defaults={homeDefaults}/>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
