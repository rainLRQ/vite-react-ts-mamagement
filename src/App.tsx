import { useState } from 'react'

import {Outlet, Link, useRoutes} from 'react-router-dom'
import router from "@/router";
function App() {
  const routeView = useRoutes(router)
  return (
    <div className="App">
      {routeView}
    </div>
  )
}

export default App
