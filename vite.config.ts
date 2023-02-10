import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// 直接引入path 模块会标红，是因为缺少ts的生命配置，安装node的ts声明配置即可
// npm i @types/node -D
import path from 'path'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    },
    // 省略扩展名
    extensions: ['.scss', '.sass','.tsx', '.ts', '.js', '.json']
  },
})
