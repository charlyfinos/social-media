import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'


const HomeScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <FormContainer>
                <h1>Sign In</h1>
                <Form>
                    <Form.Group controlId='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                        Login
                    </Button>
                </Form>
                <Row>
                    <Col>
                        You are new here?{' '}<Link to='/signup'>Signup</Link>
                    </Col>
                </Row>


            </FormContainer>
        </>
    )
}

export default HomeScreen