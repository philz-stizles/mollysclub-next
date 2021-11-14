import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { TextInput, AppButton } from '../ui'

const RegisterForm = () => {
  const [registerForm, setRegisterForm] = useState({
    fullname: '',
    // firstname: '',
    // lastname: '',
    phoneNumber: '',
    email: '',
    password: '',
    accountType: 'Doctor',
  })
  const router = useRouter()
  const { fullname, phoneNumber, email, password, accountType } = registerForm

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setRegisterForm({ ...registerForm, [name]: value })
  }

  const submitForm = async (e: any) => {
    e.preventDefault()

    console.log(registerForm)
    try {
      const response = await fetch('/api/auth/register-doctor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerForm),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      console.log(data)
      return router.push('/auth/login')
    } catch (error: any | unknown) {
      console.log(error.message)
    }
  }

  return (
    <div className="register-form">
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

            <form onSubmit={submitForm}>
              {/* <strong>Email</strong> */}
              <TextInput
                type="text"
                label="Full Name"
                placeholder="Enter your full name"
                name="fullname"
                value={fullname}
                onChange={handleInputChange}
              />
              <TextInput
                type="email"
                label="Email"
                placeholder="Enter a valid email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <TextInput
                type="tel"
                label="Telephone"
                placeholder="Your telephone number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleInputChange}
              />
              <TextInput
                type="password"
                label="Password"
                placeholder="Your secure password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
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
        .register-form {
          padding: 0 3rem;
        }

        .auth-form {
        }

        .no-gutters {
          margin-right: 0;
          margin-left: 0;
        }
      `}</style>
    </div>
  )
}

export default RegisterForm
