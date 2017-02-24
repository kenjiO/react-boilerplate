import React from 'react'
import { render } from 'react-dom'

import Root from '../src'

module.hot.accept('../src', () => {
  render(<Root />, document.querySelector('react'))
})
