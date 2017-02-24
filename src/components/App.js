import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Async from 'react-code-splitting'

import Login from './Login'
import Signup from './Signup'
import Github from './Github'

const Home = () => <Async load={import('./Home')} />

const App = ({ user }) => (
  <div>
    <Github />
    {user.token ? <Route path="/" component={Home} /> : <Redirect to="/login" />}
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
  </div>
)

App.propTypes = {
  user: React.PropTypes.shape({}).isRequired,
}

export default connect(state => ({ user: state.user }))(App)
