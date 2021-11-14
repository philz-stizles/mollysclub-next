import { useState, useEffect } from 'react'
import axios from 'axios'
import { showSuccessMessage, showErrorMessage } from '../../../../utils/alerts'
import { withRouter } from 'next/router'
import jwt from 'jsonwebtoken'

const ResetPassword = ({ router }: { router: any }) => {
  const [state, setState] = useState({
    name: '',
    token: '',
    newPassword: '',
    buttonText: 'Reset Password',
    success: '',
    error: '',
  })
  const { name, token, newPassword, buttonText, success, error } = state

  useEffect(() => {
    const decoded: any = jwt.decode(router.query.id)
    if (decoded)
      setState({ ...state, name: decoded.name, token: router.query.id })
  }, [router])

  const handleChange = (e: any) => {
    setState({ ...state, newPassword: e.target.value, success: '', error: '' })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    // console.log('post email to ', email);
    setState({ ...state, buttonText: 'Sending' })
    try {
      const response = await axios.put(`/api/auth/reset-password`, {
        resetPasswordLink: token,
        newPassword,
      })
      setState({
        ...state,
        newPassword: '',
        buttonText: 'Done',
        success: response.data.message,
      })
    } catch (error: any | unknown) {
      console.log('RESET PW ERROR', error)
      setState({
        ...state,
        buttonText: 'Forgot Password',
        error: error.response.data.error,
      })
    }
  }

  const passwordResetForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          onChange={handleChange}
          value={newPassword}
          placeholder="Type new password"
          required
        />
      </div>
      <div>
        <button className="btn btn-outline-warning">{buttonText}</button>
      </div>
    </form>
  )

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1>Hi {name}, Ready to Reset Password?</h1>
            <br />
            {success && showSuccessMessage(success)}
            {error && showErrorMessage(error)}
            {passwordResetForm()}
          </div>
        </div>
      </div>
    </main>
  )
}

export default withRouter(ResetPassword)
