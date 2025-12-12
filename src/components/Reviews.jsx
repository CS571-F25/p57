import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Reviews(props) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('reviews') || '[]');
    setReviews(stored);
  }, []);

  if (!reviews.length) {
    return (
      <Container>
        <h1 className="text-center mb-4">Reviews</h1>
        <hr className="border border-3 border-dark"/>
        <p className="text-center">No reviews yet — be the first to add one from the Games page.</p>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="text-center mb-4">Reviews</h1>
      <hr className="border border-3 border-light"/>

      <Row xs={1} md={2} lg={3} className="g-3">
        {reviews.map(r => (
          <Col key={r.id}>
            <Card>
              <Card.Body>
                <Card.Title>{r.gameTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{r.category} • {r.year}</Card.Subtitle>
                {r.author && (
                  <div className="small text-light mb-2">by {r.author}</div>
                )}
                <div className="mb-2">
                  <strong>Rating: </strong>
                  <span className="text-warning">
                    {Array.from({length: 5}).map((_, i) => (
                      <span key={i}>{i < (r.rating || 0) ? '★' : '☆'}</span>
                    ))}
                  </span>
                  {r.hoursPlayed != null && (
                    <span className="ms-3 text-muted">Hours played: {r.hoursPlayed}</span>
                  )}
                </div>
                <Card.Text>{r.content}</Card.Text>
                <div className="text-muted small">{new Date(r.createdAt).toLocaleString()}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}