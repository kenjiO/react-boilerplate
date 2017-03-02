import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import Header from './Header'
import IncrementContainer from '../containers/IncrementContainer'
import HomeComponent from './HomeComponent'
import UserClassContainer from '../containers/UserClassContainer'


const App = ( {user} ) => (
    <div style={{ border: "1px solid black", margin: '5px', width: '600px', padding: '5px' }}>
      <div>App.js</div>
      <div>User is {JSON.stringify(user)}</div>
      <Header />
      
      <Route exact path="/" component={HomeComponent} />
      <Route path="/increment" component={IncrementContainer} />
      <Route path="/UserClassContainer" component={UserClassContainer} />
    </div>
  )


App.propTypes = {
  user: React.PropTypes.shape({}).isRequired,
}

//Uses anonymous function instead of named mapStateToProps function
export default connect(state => ({ user: state.user }))(App)
