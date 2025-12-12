import React from 'react';
import { Button } from 'react-bootstrap';

export default function FavoriteButton({ isFavorited, onToggle }) {
  return (
    <Button
      variant={isFavorited ? 'danger' : 'outline-danger'}
      size="sm"
      className="mt-2"
      onClick={onToggle}
    >
      {isFavorited ? '♥ Favorited' : '♡ Favorite'}
    </Button>
  );
}
