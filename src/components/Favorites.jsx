import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function Favorites(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (u) => setUser(u));
        return () => unsub();
    }, []);

    const [list, setList] = useState([]);

    useEffect(() => {
        if (!user) {
            setList([]);
            return;
        }
        const key = `favorites_${user.uid}`;
        try {
            const stored = JSON.parse(localStorage.getItem(key) || '[]');
            setList(stored);
        } catch (e) {
            setList([]);
        }
    }, [user]);

    return (
        <Container>
          <h1 className="text-center mb-4">Your Saved Favorites</h1>
          <hr className="border border-3 border-light"/>

          {user ? (
            <>
              <h4>Welcome back, {user.email.split('@')[0]} — here are your favorites.</h4>
              {list.length === 0 ? (
                <p className="mt-3">You have no favorites yet. Add some from the <Link to="/games">Games</Link> page.</p>
              ) : (
                <div className="d-grid gap-3 mt-3">
                  {list.map((g) => (
                    <div key={g.id} className="p-3 border rounded bg-dark">
                      <h5 className="mb-1">{g.title}</h5>
                      <div className="text-muted">{g.category} • {g.year}</div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              <h4>You must be logged in to access favorites.</h4>
              <p>Log in <Link to="/login">here</Link>.</p>
            </>
          )}

        </Container>
    );
}