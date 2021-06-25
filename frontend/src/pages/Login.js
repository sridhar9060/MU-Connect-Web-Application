import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./login.css"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/exportStock")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="container3">
        <Card>
          <div className="loginbody">
            <Card.Body>
              <h2 className="logintitle text-center mb-4">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form id="loginform" onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label className='emailtitle'>Email</Form.Label>
                  <Form.Control   type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button disabled={loading} className="loginbutton w-100" type="submit">
                  Log In
                </Button>
              </Form>
              <div className="forgotpass" class ="forgotpass w-100 text-center mt-3">
                <Link id="forgottitle" to="/forgot-password">Forgot Password?</Link>
              </div>
            </Card.Body>
          </div>
          </Card>
        <div className="signinbody w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </>
  )
}
