import React from 'react'

import { TextField, Submit } from './Styled'

const Form = ({ onSubmit }) => (
  <div style={{ border: "1px solid black", margin: '5px', width: '500px', padding: '5px' }}>
    Form.js
    <form onSubmit={onSubmit}>
      <TextField
        type="email"
        name="email"
        placeholder="Email address"
        title="Enter your email address"
        required
      />
      <TextField
        type="password"
        name="password"
        placeholder="Password"
        title="Type a strong password: aBC_123^"
        pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$"
        required
      />
      <Submit type="submit" value="Continue" />
    </form>
  </div>
)

Form.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
}

export default Form
