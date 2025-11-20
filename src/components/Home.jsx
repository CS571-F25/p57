import React from 'react';
import { Container } from 'react-bootstrap';




export default function Home(props) {
    return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Welcome to PlayForum</h1>

      <p>
        This is the ultimate platform for gamers to share reviews, favorite games, and connect with fellow gaming enthusiasts. Dive into the world of gaming with us!
      </p>
    </Container>
  );
}