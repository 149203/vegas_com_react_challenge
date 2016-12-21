import React from 'react'
import { render } from 'react-dom'

// components

require('./styles/imports.scss')
// using require instead of import because importing something that webstorm views as not used in this file, will be deleted on beautify

const App = () =>
 <h1>Hello World</h1>

render(<App/>, document.getElementById('app'))