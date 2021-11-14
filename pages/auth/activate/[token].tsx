import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken'
import axios from 'axios'
import { showSuccessMessage, showErrorMessage } from '../../../utils/alerts'

const ActivateAccount = (props: any) => {
  const [state, setState] = useState({
    username: '',
    token: '',
    buttonText: 'Activate Account',
    error: '',
    success: '',
  })

  const { username, token, buttonText, error, success } = state

  const { query } = useRouter()

  useEffect(() => {
    // let token = query.token
    // if (token && typeof token === 'string') {
    //   const { username } = jwt.decode(token)
    //   setState({ ...state, username, token })
    // }
  }, [query])

  const activateAccount = async () => {
    try {
      const response = await axios.post(
        `${process.env.API}/auth/activateAccount`,
        { token }
      )

      setState({
        ...state,
        username: '',
        token: '',
        buttonText: 'Activated',
        success: response.data.message,
      })
    } catch (error: any | unknown) {
      console.log(error)
      setState({
        ...state,
        buttonText: 'Activate Account',
        error: error.response.data.message,
      })
    }
  }

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 my-5">
            <h1>Good day {username}, Ready to activate your account?</h1>
            <br />
            {success && showSuccessMessage(success)}
            {error && showErrorMessage(error)}
            <button
              onClick={activateAccount}
              className="btn btn-outline-warning w-100"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ActivateAccount
