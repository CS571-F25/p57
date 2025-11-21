import { Container } from 'react-bootstrap';
import { Link } from 'react-router';



export default function Favorites(props) {
    return (
        <Container>
          <h1 className="text-center mb-4">Your Saved Favorites</h1>
          <hr className="border border-3 border-dark"/>

          <h4>You must be logged in to access favorites.</h4>
          <p>Login in <Link to="/login">HERE</Link>.</p>


        </Container>
        );
}