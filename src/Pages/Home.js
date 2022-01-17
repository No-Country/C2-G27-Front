import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaHome } from 'react-icons/fa';
import Fooder from '../Components/Fooder';
import SearchBar from '../Components/SearchBar';
import UserCard from '../Components/UserCard';
import WidgedBoard from '../Components/WidgedBoard';

export default function Home() {
  return (
    <Container className='d-flex flex-column  flex-fill mt-2'>
      <Row className='mb-2'>
        <Col>
          <h1 className='homeTitle'>
            <FaHome /> / Dashboard{' '}
          </h1>
        </Col>
        <Col className='d-flex'>
          <SearchBar />
        </Col>
        <Col>
          <UserCard />
        </Col>
      </Row>
      <Row className=''>
        <Col>
          <WidgedBoard />
        </Col>
      </Row>
      <Row className=''>
        <Col>
          <Fooder />
        </Col>
      </Row>
    </Container>
  );
}
