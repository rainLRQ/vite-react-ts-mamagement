import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化样式放在最前面，后面有新的样式可以覆盖掉
import 'reset-css'

import '@/assets/styles/global'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
// import Router from '@/router'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
