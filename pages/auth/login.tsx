import { NextPage } from 'next'
import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'
import LoginForm from '@/components/auth/LoginForm'

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

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
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
    <div className="login-page">
      <div className="container login-page__container">
        <div className="row login-page__row">
          <div className="col-md-6">
            <LoginForm />
          </div>
        </div>
      </div>
      <style jsx>{`
        .login-page {
          height: 100vh;
        }

        .login-page__container {
          height: 100%;
        }

        .login-page__row {
          height: 100%;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

export default Login
