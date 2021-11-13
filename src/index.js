import { ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import 'style/index.scss'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { theme } from './theme'
import './i18n'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
)

reportWebVitals()
