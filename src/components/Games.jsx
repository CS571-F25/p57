import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import GamesSidebar from './GamesSidebar';

const SAMPLE_GAMES = [
  { id: 1, title: 'Astro Bot', category: 'Platformer', year: 2024 },
  { id: 2, title: "Baldur's gate 3", category: 'RPG', year: 2023 },
  { id: 3, title: 'Elden Ring', category: 'Action/Adventure', year: 2022 },
  { id: 4, title: 'It Takes Two', category: 'Action/Adventure', year: 2021 },
  { id: 5, title: 'The Last of Us Part II', category: 'Action/Adventure', year: 2020 },
  { id: 6, title: 'Sekiro: Shadows Die Twice', category: 'Action/Adventure', year: 2019 },
  { id: 7, title: 'God of War', category: 'Action/Adventure', year: 2018 },
  { id: 8, title: 'The Legend of Zelda: Breath of the Wild', category: 'Action/Adventure', year: 2017 },
  { id: 9, title: 'Overwatch', category: 'FPS', year: 2016 },
  { id: 10, title: 'The Witcher 3: Wild Hunt', category: 'Action/Adventure', year: 2015 },
  { id: 11, title: 'Dragon Age: Inquisition', category: 'Action/Adventure', year: 2014 },
];

export default function Games(props) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  function handleView(game) {
    // demo action: replace with navigation or modal as needed
    alert(`${game.title} — ${game.category} (${game.year})`);
  }

  const categories = ['All', ...Array.from(new Set(SAMPLE_GAMES.map((g) => g.category)))];

  const filtered = selectedCategory === 'All' ? SAMPLE_GAMES : SAMPLE_GAMES.filter(g => g.category === selectedCategory);

  return (
    <Container>
      <h1 className="text-center mb-4">Games</h1>
      <hr className="border border-3 border-dark"/>

      <Row>
        <Col md={3} className="mb-3">
          <GamesSidebar categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
        </Col>

        <Col md={9}>
          <Row xs={1} md={2} lg={3} className="g-3">
            {filtered.map(game => (
              <Col key={game.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>{game.title}</Card.Title>
                    <Card.Text className="text-muted">{game.category} • {game.year}</Card.Text>
                    <div>
                        <Button className="me-2">Review</Button>
                        <Button >Favorite</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <hr className="border border-3 border-dark"/>
      <p><strong>NOTE:</strong> This list of games come from the "The Game Awards" winners from the last 10 years.</p>
    </Container>
  );
}