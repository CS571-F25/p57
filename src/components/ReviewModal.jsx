import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

export default function ReviewModal({ show, onHide, game, onSave }) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [hours, setHours] = useState('');

  useEffect(() => {
    if (show) {
      setText('');
      setRating(0);
      setHours('');
    }
  }, [show, game]);

  function handleSubmit() {
    if (!text.trim()) return;
    onSave({ content: text.trim(), rating: Number(rating) || 0, hours: hours === '' ? null : Number(hours) });
    onHide();
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{game ? `Review: ${game.title}` : 'Write a Review'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="reviewText">
            <Form.Label>Your review</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="reviewRating" className="mt-3">
            <Form.Label>Rating</Form.Label>
            <div>
              {[1,2,3,4,5].map((n) => (
                <Button
                  key={n}
                  variant={n <= rating ? 'warning' : 'outline-secondary'}
                  size="sm"
                  onClick={() => setRating(n)}
                  className="me-1"
                >
                  {n <= rating ? '★' : '☆'}
                </Button>
              ))}
              <Button variant="link" size="sm" onClick={() => setRating(0)}>Clear</Button>
            </div>
          </Form.Group>

          <Form.Group controlId="reviewHours" className="mt-3">
            <Form.Label>Hours played</Form.Label>
            <Form.Control
              type="number"
              min="0"
              step="1"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder="Enter hours played"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cancel</Button>
        <Button variant="primary" onClick={handleSubmit} disabled={!text.trim()}>Submit Review</Button>
      </Modal.Footer>
    </Modal>
  );
}
