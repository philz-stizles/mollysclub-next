import React from 'react'
import { TextInput, AppButton } from '../ui'

const RegisterForm = () => {
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

            <form>
              {/* <strong>Email</strong> */}
              <TextInput
                type="text"
                label="Full Name"
                placeholder="Enter your full name"
                value={''}
                onChange={() => {}}
              />
              <TextInput
                type="email"
                label="Email"
                placeholder="Enter a valid email"
                value={''}
                onChange={() => {}}
              />
              <TextInput
                type="tel"
                label="Telephone"
                placeholder="Your telephone number"
                value={''}
                onChange={() => {}}
              />
              <div className="text-center">
                <AppButton label={'Sign Me In'} />
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
