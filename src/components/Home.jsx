import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import logo from '../assets/logo-placeholder.svg';




export default function Home(props) {
    return (
    <Container>
      <Row className="align-items-center my-4">
        <Col md={6} className="text-center">
          <img src={logo} alt="PlayForum logo" style={{ maxWidth: '80%', height: 'auto' }} />
        </Col>
        <Col md={6}>
          <h1 className="fs-3">Welcome to PlayForum</h1>
          <p className="lead">Discover games, write reviews, and save favorites — all in one place.
          Create an account (or use a username) to start saving favorites and posting reviews.</p>
          <div className="d-flex gap-2">
            <Button href="#/games" variant="success">Browse Games</Button>
            <Button href="#/reviews" variant="outline-light">See Reviews</Button>
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={8}>
          <Card className="p-3 bg-dark text-light">
            <h4>What you can do</h4>
            <ul>
              <li>Browse games by category and year.</li>
              <li>Write reviews with rating and hours played.</li>
              <li>Save favorites to your account for quick access.</li>
              <li>View community reviews from all users.</li>
            </ul>
          </Card>
        </Col>
        <Col md={4} className="text-center">
        </Col>
      </Row>

    </Container>
  );
}