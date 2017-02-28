import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { signup } from '../actions'

import { FormTitle, FooterLink } from './Styled'
import Form from './Form'

const Signup = ({ user, signup }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const { email: { value: email }, password: { value: password } } = e.target
    signup({ email, password })
  }

  return (
    <div style={{ border: "1px solid black", margin: '5px', width: '500px', padding: '5px' }}>
      Signup.js
      <Form onSubmit={handleSubmit} />
      <FooterLink to="/login">Already have an account?</FooterLink>
      {/*{user.token && <Redirect to="/" />}*/}
    </div>
  )
}

Signup.propTypes = {
  user: React.PropTypes.shape({}).isRequired,
  signup: React.PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { signup })(Signup)
