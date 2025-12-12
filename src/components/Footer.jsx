import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="mt-5 py-3">
      <Container className="text-center text-muted small">
        © {new Date().getFullYear()} PlayForum — Built for class projects
      </Container>
    </footer>
  );
}
