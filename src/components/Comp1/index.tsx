import React, {Component} from 'react'
// import './comp1.scss' // 这种引入方式属于全局引入，会影响其他的组件

// 模块化引入 这种方式只会影响当前使用样式的组件的样式
// 1.样式文件命名为 name.module.scss(必须这样命名)
// 2. 引入模块
import styles from './comp1.module.scss'
function Comp() {
  return (
    <div className={styles.box}>
      <p>这是COMP1里面的内容</p>
    </div>
  )
}

export default Comp
