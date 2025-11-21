import React from 'react';
import { Container } from 'react-bootstrap';




export default function Home(props) {
    return (
    <Container>
      <h1 className="text-center mb-4">Welcome to PlayForum</h1>
      <hr className="border border-3 border-dark"/>

      <p>The site to review, log, and share your favorite games with friends. </p>

    </Container>

    
  );
}