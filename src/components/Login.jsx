import { Form, Button, Card, Container } from "react-bootstrap";

function Login(props) {
    return (

        <Container className=" justify-content-center align-items-center" >
            
                <h1 className="text-center fs-1 mb-4">Login or Sign up Here</h1>
                
            

            <Form>
                <Form.Group controlId="formBasicUsername">
                <Form.Label className="fs-4">Username</Form.Label>
                <Form.Control 
                    type="username" 
                    placeholder="Enter username" 
                />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Label className="fs-4">Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                />
                </Form.Group>

                <Button className="mt-3"variant="primary" type="submit">
                Login
                </Button>
            </Form>
        </Container>
    )
}

export default Login;