import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { Message, Blue } from './Styled'

const Home = ({ user }) => {
  if (user.token) {
    console.log('user.token is: ', user.token)
    return <Message>{'You\'re logged in as '}<Blue>{user.email}</Blue></Message>
  } else {
    console.log('user.token not set')
    return <Redirect to="/login" />
  }
}



Home.propTypes = {
  user: React.PropTypes.shape({}).isRequired,
}

export default connect(state => ({ user: state.user }))(Home)
