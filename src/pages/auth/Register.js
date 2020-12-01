import React, { useState } from "react"
import { auth } from "../../firebase"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()

    // Firebase action config
    const actionCodeSettings = {
      url: 'http://localhost:3000/register/complete',
      handleCodeInApp: true
    }

    await auth.sendSignInLinkToEmail(email, actionCodeSettings)
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration.`
    )

    // Save user email in local storage
    window.localStorage.setItem('emailForRegistration', email)
    // clear state
    setEmail("")
  }

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        onChange={e => setEmail(e.target.value)}
        className='form-control'
        value={email}
        type="email"
        autoFocus
      />
      <button type="submit" className="btn btn-raised">
        Register
      </button>
    </form>
  )

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          <ToastContainer />
          {registerForm()}
        </div>
      </div>
    </div>
  )
}

export default Register
