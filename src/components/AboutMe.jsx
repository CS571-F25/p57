import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import logo from '../assets/logo-placeholder.svg';

export default function AboutMe(props) {
    return (
    <Container>
      <h1 className="text-center mb-4">About PlayForum</h1>
      <hr className="border border-3 border-light"/>

      <Row>
        <Col md={4} className="text-center mb-3">
          <img src={logo} alt="PlayForum" style={{ maxWidth: '90%' }} />
        </Col>
        <Col md={8}>
          <Card className="p-3 bg-dark text-light">
            <p>
              PlayForum is a project aimed at helping gamers share opinions and
              discover titles they might enjoy.
            </p>
            <p>
              Features include game browsing, user reviews (rating and hours played), and
              per-user favorites stored locally. This project is intended for classroom use
              and personal experimentation.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
    );
}