import React, {lazy} from 'react'

// import Home from "@/views/Home"
// import About from "@/views/About"
// import User from "@/views/User"
const Home = lazy(() => import('@/views/Home'))
// const About = lazy(() => import('@/views/About'))
// const User = lazy(() => import('@/views/User'))
const Page1 = lazy(() => import('@/views/Page1'))
const Page2 = lazy(() => import('@/views/Page2'))
const Page3 = lazy(() => import('@/views/Page3'))
// 重定向组件
import {Navigate} from 'react-router-dom'


// 抽取 loading 组件函数
const withLoadingComponent = (com: JSX.Element) => {
  return <React.Suspense fallback={<div>Loading...</div>}>
    {/* 变化的变量用大括号包括 */}
    {com}
  </React.Suspense>
}


const routes = [
  // 嵌套路由 开始-------- 需要先有一个重定向的路由
  // 嵌套路由的展示用Outlet组件展示，不可以再用useRoutes hook
  {
    path: '/',
    element: <Navigate to='/page1'/>
  },
  {
    path: '/',
    element: <Home/>,
    children:[
      {
        path: '/page1',
        element: withLoadingComponent(<Page1/>)
      },
      {
        path: '/page2',
        element: withLoadingComponent(<Page2/>)
      },
      {
        path: '/page3/page3-1',
        element: withLoadingComponent(<Page3/>)
      }
    ]
  },
  // {
  //   path: '/home',
  //   element: withLoadingComponent(<Home/>)
  // },
  // {
  //   path: '/about',
  //   element: withLoadingComponent(<About/>)
  // },
  // {
  //   path: '/user',
  //   element: withLoadingComponent(<User/>)
  // }
]

export default routes
