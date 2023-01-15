
import React from 'react'
import { useLogin } from '../../hooks/useLogin'
//style
import './Login.css'
import { useState } from 'react'


export default function Signup() {
  const[email, setEmail] = useState('')
  const[password, setPasword] = useState('')
  const {login, isPending, error} = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }
  
return (
  <div>
      <form className="auth-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label>
              <span> Email </span>
              <input
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              />
          </label>
          <label>
              <span> Password </span>
              <input
              required
              type="password"
              onChange={(e) => setPasword(e.target.value)}
              value={password}
              />
          </label>
          
          {!isPending && <button className='btn'> Login </button>}
          {error && <div className='error'>{error}</div>}

      </form>

  </div>
)
}
