import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { login } from '../actions'

import { FormTitle, FooterLink } from './Styled'
import Form from './Form'

const Login = ({ user, login }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const { email: { value: email }, password: { value: password } } = e.target
    login({ email, password })
  }

  return (
    <div style={{ border: "1px solid black", margin: '5px', width: '500px', padding: '5px' }}>
      Login
      <FormTitle>Login</FormTitle>
      <Form onSubmit={handleSubmit} />
      <FooterLink to="/signup">{'You don\'t have an account ?'}</FooterLink>
      {user.token && <Redirect to="/" />}
    </div>
  )
}

Login.propTypes = {
  user: React.PropTypes.shape({}).isRequired,
  login: React.PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { login })(Login)
