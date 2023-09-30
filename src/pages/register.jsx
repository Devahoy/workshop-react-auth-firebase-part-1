import { useRef, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { auth } from '../libs/firebase'

const Register = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/dashboard')
    } catch (error) {
      console.log(error)
      setErrorMessage(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>สมัครสมาชิก</h2>

      <div className="container">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required ref={emailRef} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" required ref={passwordRef} />

        <button type="submit">สมัครสมาชิก</button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  )
}

export default Register
