import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import store from './store/store'
// import configureStore from './store/configure-store'
// const store = configureStore()

import App from './components/App'

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

render(<Root />, document.querySelector('react'))

export default Root
