import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function GamesSidebar({ categories = [], selected, onSelect }) {
  return (
    <aside className="games-sidebar">
      <ListGroup as="ul" className="w-100">
        {categories.map((cat) => (
          <ListGroup.Item
            as="li"
            key={cat}
            action
            active={selected === cat}
            onClick={() => onSelect(cat)}
            style={{ cursor: 'pointer' }}
          >
            {cat}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </aside>
  );
}
