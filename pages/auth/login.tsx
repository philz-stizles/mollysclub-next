import { NextPage } from 'next'
import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'
// import Image from 'next/image'

// import signinImage from '../assets/signup.jpg'
// import { margin } from '@mui/system'

const cookies = new Cookies()

const initialState = {
  fullName: '',
  username: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
  avatarURL: '',
}

const Login: NextPage = () => {
  const [form, setForm] = useState(initialState)
  const [isSignup, setIsSignup] = useState(true)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const { username, password, phoneNumber, avatarURL } = form

    const URL = 'https://localhost:5000/auth'
    // const URL = 'https://medical-pager.herokuapp.com/auth';

    const {
      data: { token, userId, hashedPassword, fullName },
    } = await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`, {
      username,
      password,
      fullName: form.fullName,
      phoneNumber,
      avatarURL,
    })

    cookies.set('token', token)
    cookies.set('username', username)
    cookies.set('fullName', fullName)
    cookies.set('userId', userId)

    if (isSignup) {
      cookies.set('phoneNumber', phoneNumber)
      cookies.set('avatarURL', avatarURL)
      cookies.set('hashedPassword', hashedPassword)
    }

    window.location.reload()
  }

  const switchMode = () => {
    setIsSignup(prevIsSignup => !prevIsSignup)
  }

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div style={{ textAlign: 'center' }}>
          <img
            src="https://mollysclubng.com/wp-content/themes/getleads/assets/images/logo/logo-white.png"
            alt="Mollys Club Logo"
          />
        </div>
        <div className="auth__form-container_fields-content">
          {/* <p>{isSignup ? 'Sign Up' : 'Sign In'}</p> */}
          <form onSubmit={handleSubmit}>
            <div className="auth__form-container_fields-content_input">
              {/* <label htmlFor="phoneNumber">Phone Number</label> */}
              <input
                name="phoneNumber"
                type="text"
                placeholder="Phone Number"
                onChange={handleChange}
                required
              />
            </div>
            <div className="auth__form-container_fields-content_input">
              {/* <label htmlFor="password">Password</label> */}
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="auth__form-container_fields-content_button">
              <button>Sign In to your account</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup
                ? 'Already have an account? '
                : "Don't have an account? "}
              <span onClick={switchMode}>Sign In to your account</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
