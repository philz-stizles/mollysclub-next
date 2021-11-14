import { LoginForm } from '@/components/ui'
import RegisterForm from '@/components/auth/RegisterPatientForm'
import { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'

const RegisterPage: NextPage = () => {
  return (
    <div className="register-page">
      <div className="register-page__container">
        <div className="row">
          <div className="col-lg-5">
            <div>
              <Image
                src="/images/workout-Illustration.svg"
                width="420"
                height="500"
                alt=""
                objectFit="cover"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <RegisterForm />
          </div>
        </div>
      </div>

      <style jsx>{`
        .register-page {
          min-height: 100vh;
          background: #e8f1ff;
        }

        .register-page__container {
          background-color: #fff;
          width: 1000px;
          min-height: 460px;
          margin: 120px auto 30px;
        }

        .col-lg-7 {
          background: #c6caed;
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

export default RegisterPage
