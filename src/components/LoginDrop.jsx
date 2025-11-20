import { Form, Button, Dropdown } from 'react-bootstrap';

function LoginDrop(props) {
   return (
    <Form>
      <Form.Group className="mb-3" controlId="loginUsername">
        <Form.Label className="mb-1">Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="loginPassword">
        <Form.Label className="mb-1">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Login
      </Button>
    </Form>
  );

}

export default LoginDrop;