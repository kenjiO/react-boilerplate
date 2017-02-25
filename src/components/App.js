import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Async from 'react-code-splitting'

import Header from './Header'
import Github from './Github'
import Signup from './Signup'
import Login from './Login'

const HomeAsync = () => <Async load={import('./Home')} />

const App = ({ user }) => (
  <div style={{ border: "1px solid black", margin: '5px', width: '600px', padding: '5px' }}>
    App.js
    <Header />
    <Github />
    {/*{user.token ? <Route path="/" component={Home} /> : <Redirect to="/login" />}*/}
    <Route exact path="/" component={HomeAsync} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
  </div>
)

App.propTypes = {
  user: React.PropTypes.shape({}).isRequired,
}

export default connect(state => ({ user: state.user }))(App)
