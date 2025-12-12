import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GamesSidebar from './GamesSidebar';
import GameCard from './GameCard';
import ReviewModal from './ReviewModal';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

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
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewGame, setReviewGame] = useState(null);
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!user) {
      setFavorites(new Set());
      return;
    }
    const key = `favorites_${user.uid}`;
    try {
      const stored = JSON.parse(localStorage.getItem(key) || '[]');
      setFavorites(new Set(stored.map((g) => g.id)));
    } catch (e) {
      setFavorites(new Set());
    }
  }, [user]);
  

  function handleView(game) {
    // demo action: replace with navigation or modal as needed
    alert(`${game.title} — ${game.category} (${game.year})`);
  }

  function toggleFavorite(game) {
    if (!user) {
      // if not logged in, send user to login
      navigate('/login');
      return;
    }
    const key = `favorites_${user.uid}`;
    const stored = JSON.parse(localStorage.getItem(key) || '[]');
    const exists = stored.find((g) => g.id === game.id);
    let updated;
    if (exists) {
      updated = stored.filter((g) => g.id !== game.id);
      setFavorites((s) => {
        const n = new Set(s);
        n.delete(game.id);
        return n;
      });
    } else {
      updated = [ ...stored, { id: game.id, title: game.title, category: game.category, year: game.year } ];
      setFavorites((s) => new Set(s).add(game.id));
    }
    localStorage.setItem(key, JSON.stringify(updated));
  }

  function openReview(game) {
    setReviewGame(game);
    setShowReviewModal(true);
  }

  function saveReview(payload) {
    if (!reviewGame) return;
    const stored = JSON.parse(localStorage.getItem('reviews') || '[]');
    const userForReview = auth.currentUser;
    const newReview = {
      id: Date.now(),
      gameId: reviewGame.id,
      gameTitle: reviewGame.title,
      category: reviewGame.category,
      year: reviewGame.year,
      author: userForReview ? userForReview.email.split('@')[0] : 'Anonymous',
      content: payload.content,
      rating: Number(payload.rating) || 0,
      hoursPlayed: payload.hours,
      createdAt: new Date().toISOString(),
    };
    stored.unshift(newReview);
    localStorage.setItem('reviews', JSON.stringify(stored));
    setShowReviewModal(false);
    alert('Review saved — visit the Reviews page to see it.');
  }

  const categories = ['All', ...Array.from(new Set(SAMPLE_GAMES.map((g) => g.category)))];

  const filtered = selectedCategory === 'All' ? SAMPLE_GAMES : SAMPLE_GAMES.filter(g => g.category === selectedCategory);

  return (
    <Container>
      <h1 className="text-center mb-4">Games</h1>
      <hr className="border border-3 border-light"/>

      <Row>
        <Col md={3} className="mb-3">
          <GamesSidebar categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
        </Col>

        <Col md={9}>
          <Row xs={1} md={2} lg={3} className="g-3">
            {filtered.map(game => (
              <Col key={game.id}>
                <GameCard
                  game={game}
                  onView={handleView}
                  onOpenReview={openReview}
                  isFavorited={favorites.has(game.id)}
                  onToggleFavorite={toggleFavorite}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <hr className="border border-3 border-light"/>
      <p><strong>NOTE:</strong> This list of games come from the "The Game Awards" winners from the last 10 years.</p>
          <ReviewModal show={showReviewModal} onHide={() => setShowReviewModal(false)} game={reviewGame} onSave={saveReview} />
    </Container>
  );
}