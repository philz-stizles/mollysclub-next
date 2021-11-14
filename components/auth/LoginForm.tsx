import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AppButton, TextInput } from '../ui'

const LoginForm = () => {
  const [loginForm, setRegisterForm] = useState({
    email: '',
    password: '',
  })
  const router = useRouter()
  const { email, password } = loginForm

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setRegisterForm({ ...loginForm, [name]: value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    console.log(loginForm)
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginForm),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      console.log(data)
      if (data.data.role === 'admin') {
        return router.push({ pathname: '/admin/dashboard' })
      } else {
        return router.push({ pathname: '/admin/dashboard' })
      }
    } catch (error: any | unknown) {
      console.log(error.message)
    }
  }

  return (
    <div className="login-form">
      <div className="row no-gutters">
        <div className="col-xl-12">
          <div className="auth-form">
            <div className="text-center mb-3">
              <a href="index.html">
                <img
                  src="https://mollysclubng.com/wp-content/themes/getleads/assets/images/logo/logo-white.png"
                  alt="Mollys Club Logo"
                />
              </a>
            </div>
            <h4 className="text-center mb-4 text-white">
              Sign in your account
            </h4>

            <form onSubmit={handleSubmit}>
              {/* <strong>Email</strong> */}
              <TextInput
                type="email"
                label="Email"
                placeholder="Enter a valid email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <TextInput
                type="password"
                label="Password"
                placeholder="Enter a valid password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
              <div className="form-row d-flex justify-content-between mt-4 mb-2">
                <div className="form-group">
                  <div className="custom-control custom-checkbox ml-1 text-white">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="basic_checkbox_1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="basic_checkbox_1"
                    >
                      Remember my preference
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <a className="text-white" href="page-forgot-password.html">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <div className="text-center">
                <AppButton type="submit" label={'Sign Me In'} />
              </div>
            </form>
            <div className="new-account mt-3">
              <p className="text-white">
                {`Don't have an account? `}
                <a className="text-white" href="./page-register.html">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .login-form {
          background: #6d62fd;
          box-shadow: 0 0 35px 0 rgb(154 161 171 / 15%);
          border-radius: 5px;
          color: #fff;
        }

        .auth-form {
          padding: 50px 50px;
        }

        .no-gutters {
          margin-right: 0;
          margin-left: 0;
        }
      `}</style>
      <style jsx global>{`
        .login-form label {
          color: #fff !important;
        }
      `}</style>
    </div>
  )
}

export default LoginForm
