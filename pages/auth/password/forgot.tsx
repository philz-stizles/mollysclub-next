import { useState } from 'react'
import axios from 'axios'
import { showSuccessMessage, showErrorMessage } from '../../../utils/alerts'

const ForgotPassword = () => {
  const [state, setState] = useState({
    email: '',
    buttonText: 'Forgot Password',
    success: '',
    error: '',
  })
  const { email, buttonText, success, error } = state

  const handleChange = (e: any) => {
    setState({ ...state, email: e.target.value, success: '', error: '' })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const response = await axios.put(
        `${process.env.API}/auth/forgotPassword`,
        { email }
      )
      console.log('FORGOT PASSWORD', response)
      setState({
        ...state,
        email: '',
        buttonText: 'Done',
        success: response.data.message,
      })
    } catch (error: any | unknown) {
      console.log('FORGOT PW ERROR', error)
      setState({
        ...state,
        buttonText: 'Forgot Password',
        error: error.response.data.error,
      })
    }
  }

  const PasswordForgotForm = (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          onChange={handleChange}
          value={email}
          placeholder="Type your email"
          required
        />
      </div>

      <div>
        <button type="submit" className="btn btn-outline-purple">
          {buttonText}
        </button>
      </div>
      <style jsx>{`
        .btn-outline-purple {
          border: 1px solid #540d6e;
          color: #540d6e;
        }

        .btn-outline-purple:hover {
          background: #540d6e;
          color: #fff;
        }
      `}</style>
    </form>
  )

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1>Forgot Password</h1>
            <br />
            {success && showSuccessMessage(success)}
            {error && showErrorMessage(error)}
            {PasswordForgotForm}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ForgotPassword
