import React from 'react'
import SyntaxHighlighter from "react-syntax-highlighter"
import {atomOneDark} from "react-syntax-highlighter/dist/esm/styles/hljs"
const View = () => {
  const code = '' +
    '// router.index.tsx 组件形式的路由写法\n' +
    'import App from "../App"\n' +
    'import Home from "@/views/Home"\n' +
    'import About from "@/views/About"\n' +
    'import {BrowserRouter, Routes, Route } from "react-router-dom"\n' +
    '// 两种路由模式的组件： BrowserRouter(history模式)， HashRouter(Hash模式)\n' +
    '\n' +
    '// const baseRouter = () => {\n' +
    '//   return ()\n' +
    '// }\n' +
    '\n' +
    '// 以上写法可以简写为：\n' +
    'const baseRouter = () => (\n' +
    '  <BrowserRouter>\n' +
    '    <Routes>\n' +
    '      <Route path="/" element={<App/>}>\n' +
    '        <Route path="/home" element={<Home/>}></Route>\n' +
    '        <Route path="/about" element={<About/>}></Route>\n' +
    '      </Route>\n' +
    '    </Routes>\n' +
    '  </BrowserRouter>\n' +
    ')\n' +
    '\n' +
    'export default baseRouter'
  return (
    <div className="home">
      <h3>React路由----第一种配置方案（旧项目写法）</h3>
      <SyntaxHighlighter children={code}
                         language="javascript"
                         style={atomOneDark} showLineNumbers={true}
                         startingLineNumber={1}
                         wrapLines={true}
                         lineProps={num => {
                           console.log(num)
                           return {style: {lineHeight: 1.5}}
                         }}
      />
    </div>
  )
}

export default View
