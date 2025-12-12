import React from 'react';
import { Card, Button } from 'react-bootstrap';
import FavoriteButton from './FavoriteButton';

export default function GameCard({ game, onView, onOpenReview, isFavorited, onToggleFavorite }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{game.title}</Card.Title>
        <Card.Text className="text-muted">{game.category} • {game.year}</Card.Text>
        <div className="d-flex gap-2">
          <Button variant="primary" size="sm" className="mt-2" onClick={() => onView(game)}>View</Button>
          <Button variant="outline-primary" size="sm" className="mt-2" onClick={() => onOpenReview(game)}>Review</Button>
          <FavoriteButton isFavorited={isFavorited} onToggle={() => onToggleFavorite(game)} />
        </div>
      </Card.Body>
    </Card>
  );
}
